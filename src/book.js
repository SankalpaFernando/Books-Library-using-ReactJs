import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import defaultBook from "./img/defaultBook.png";
import "../src/sass/style.scss";

const Book = ({id,volumeInfo}) => {
    const 
        {
          title,
          authors,
          publisher,
          previewLink,
          imageLinks,
        }
    = volumeInfo;

      return (
        <section key={id} className="loading-card">
          <div>
            <div>
              <img
                src={imageLinks ? imageLinks.thumbnail : defaultBook}
                width="100px"
                alt="Book-cover"
              />
            </div>
            <div>
              {title && (
                <div>
                  <h3 className="inline">{title}</h3>
                </div>
              )}
            </div>

            <div>
              {authors && (
                <h4 style={{ paddingBottom: "1rem", color: "black" }}>
                  {" "}
                  Author:{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#3B3B3B",
                    }}
                  >
                    {" "}
                    {authors}{" "}
                  </span>
                </h4>
              )}
            </div>

            <div>
              {publisher && (
                <h5 style={{ paddingBottom: "1rem", color: "black" }}>
                  {" "}
                  Published by:{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#3B3B3B",
                    }}
                  >
                    {" "}
                    {publisher}{" "}
                  </span>
                </h5>
              )}
            </div>

            <div>
              {previewLink && (
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    paddingBottom: "1rem",
                  }}
                >
                  Read more :{" "}
                  <a
                    href={previewLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Google Books <BiLinkExternal></BiLinkExternal>{" "}
                  </a>
                </h5>
              )}
            </div>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            > {language && }
              <p>
                {" "}
                <span style={{ fontWeight: "bold", color: "black" }}>
                  {" "}
                  Language :{" "}
                </span>{" "}
                {language}{" "}
              </p>
              <p>
                {" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    marginLeft: "1rem",
                  }}
                >
                  {" "}
                  Average Rating :{" "}
                </span>{" "}
                {averageRating}
              </p>
            </div> */}
          </div>
        </section>
      );
}

export default Book