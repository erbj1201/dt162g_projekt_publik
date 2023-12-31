//Import
import React, { useEffect, useState } from "react";
//url for fetch
const url = "http://127.0.0.1:3000/menu";
//Structure of post (menu item)
interface Post {
  _id: number;
  name: string;
  description: string;
  category: string;
  price: string;
}
//Component
const MenuComponent: React.FC = () => {
  //States
  const [error, setError] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  //UseEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${url}`);
        const fetchedPosts = (await response.json()) as Post[];
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  //UseEffect to filer by category
  useEffect(() => {
    // Filter posts based on the selected category
    const filtered = posts.filter((post) =>
      category ? post.category === category : true
    );
    setFilteredPosts(filtered);
  }, [category, posts]);
  //If loading display message
  if (isLoading) {
    return <p>Loading...</p>;
  } //If error, message
  if (error) {
    return <p>Something went wrong, please try again!</p>;
  }

  return (
    <div>
      <h1 className="mx-auto text-center">Menyer</h1>
      <form className="form-control border-0 mx-auto w-50 text-center m-5">
        <label className="border-0 mx-auto p-2" htmlFor="category">
          <strong>Sortera meny efter kategori</strong>
        </label>
        <select
          className="form-control mb-3 mx-auto form-select border border-white shadow-none text-center"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category || ""}
        >
          <option value="" disabled>
            Välj kategori
          </option>
          <option value="">Alla</option>
          {Array.from(new Set(posts.map((post) => post.category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </form>

      {!isLoading && !error && (
        <div className="mx-auto text-center">
          {/*Render meny items by category */}
          {filteredPosts.map((post) => (
            <article className="mx-auto" key={post._id}>
              <h3>{post.name}</h3>
              <p>
                <em>{post.description}</em>
              </p>
              <p>
                <strong>{post.price}</strong>
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
