"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { categories, products, type Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

type Category = (typeof categories)[number];
type SortOrder = "edit" | "name-asc" | "name-desc";

function matchesSearch(product: Product, query: string) {
  const words = query.trim().toLocaleLowerCase("en-US").split(/\s+/).filter(Boolean);
  const searchable = `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase("en-US");
  return words.every((word) => searchable.includes(word));
}

export function CollectionBrowser({ initialCategory = "All products", initialQuery = "" }: { initialCategory?: Category; initialQuery?: string }) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOrder>("edit");

  const keywordMatches = useMemo(() => products.filter((product) => matchesSearch(product, query)), [query]);
  const filtered = useMemo(() => {
    const result = keywordMatches.filter((product) => category === "All products" || product.category === category);
    if (sort === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name, "en-US"));
    if (sort === "name-desc") result.sort((a, b) => b.name.localeCompare(a.name, "en-US"));
    return result;
  }, [keywordMatches, category, sort]);

  function resetCollection() {
    setCategory("All products");
    setQuery("");
    setSort("edit");
  }

  return (
    <div className="collection-browser">
      <div className="collection-controls">
        <div className="search-field">
          <Search size={19} aria-hidden="true" />
          <label className="sr-only" htmlFor="collection-search">Search products</label>
          <input id="collection-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" aria-controls="collection-results" autoComplete="off" />
          {query && <button className="collection-search-clear" type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={17} aria-hidden="true" /></button>}
        </div>
        <div className="category-filters" role="group" aria-label="Filter products by category">
          {categories.map((item) => {
            const count = item === "All products" ? keywordMatches.length : keywordMatches.filter((product) => product.category === item).length;
            return <button className={`filter-button${category === item ? " is-active" : ""}`} type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item} aria-controls="collection-results"><span>{item}</span><span aria-hidden="true">{count}</span><span className="sr-only">, {count} {count === 1 ? "product" : "products"}</span></button>;
          })}
        </div>
      </div>

      <div className="collection-toolbar">
        <p className="result-count" role="status" aria-live="polite" aria-atomic="true">{filtered.length} {filtered.length === 1 ? "product" : "products"}{query.trim() ? ` for “${query.trim()}”` : " in the collection"}</p>
        <div className="sort-control"><label htmlFor="collection-sort">Sort by</label><select id="collection-sort" value={sort} onChange={(event) => setSort(event.target.value as SortOrder)}><option value="edit">Our edit</option><option value="name-asc">Name A–Z</option><option value="name-desc">Name Z–A</option></select></div>
      </div>

      {filtered.length > 0 ? (
        <div className="product-grid" id="collection-results">{filtered.map((product, index) => <ProductCard product={product} key={product.id} priority={index < 3} />)}</div>
      ) : (
        <div className="collection-empty" id="collection-results"><p className="eyebrow">A fresh start</p><h2>No products found.</h2><p>Try another search or explore the full collection.</p><button className="button button-dark" type="button" onClick={resetCollection}>Reset the collection <ArrowUpRight size={17} aria-hidden="true" /></button></div>
      )}
    </div>
  );
}
