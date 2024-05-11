"use client"
import React, { useEffect, useState } from "react"
import "../styles/navbar.css"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="navbar">
        <Link href={"/"}>
          <div className="logo"></div>
        </Link>

        <div className="nav-it">
          <Link
            href={"/craft"}
            style={{ textDecoration: "none", color: "white" }}
          >
            About Craft
          </Link>
          <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
            Motif
          </Link>
          <Link
            href={"/products"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Product
          </Link>
          <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
            Artisan
          </Link>
          <Link
            href={"/banaras"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Banaras
          </Link>
          <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
            Kaashth Kari
          </Link>
        </div>

        <div className="menu-icon">
          <svg
            onClick={() => {
              setIsOpen(true)
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={24}
            height={24}
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
        {isOpen && (
          <div className="menu-bar">
            <div className="menu-top" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fffff"
                width={24}
                height={24}
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </div>

            <div className="mobile-nav-it" onClick={() => setIsOpen(false)}>
              <Link
                href={"/craft"}
                style={{ textDecoration: "none", color: "black" }}
              >
                About Craft
              </Link>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Motif
              </Link>
              <Link
                href={"/products"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Product
              </Link>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Artisan
              </Link>
              <Link
                href={"/banaras"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Banaras
              </Link>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Kaashth Kari
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="search">
        <div className="hindi-logo">
          <img src="/logohindi.png" alt="" />
        </div>
        <div className="w-nav">
          <div className="search-box">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5167 16.625L10.5292 11.6375C10.1333 11.9542 9.67813 12.2049 9.16354 12.3896C8.64896 12.5743 8.10139 12.6667 7.52083 12.6667C6.08264 12.6667 4.86558 12.1684 3.86967 11.172C2.87375 10.1756 2.37553 8.9585 2.375 7.52083C2.37447 6.08317 2.87269 4.86611 3.86967 3.86967C4.86664 2.87322 6.08369 2.375 7.52083 2.375C8.95797 2.375 10.1753 2.87322 11.1728 3.86967C12.1703 4.86611 12.6683 6.08317 12.6667 7.52083C12.6667 8.10139 12.5743 8.64896 12.3896 9.16354C12.2049 9.67812 11.9542 10.1333 11.6375 10.5292L16.625 15.5167L15.5167 16.625ZM7.52083 11.0833C8.51042 11.0833 9.3517 10.7371 10.0447 10.0447C10.7376 9.35222 11.0839 8.51094 11.0833 7.52083C11.0828 6.53072 10.7366 5.68971 10.0447 4.99779C9.35275 4.30588 8.51147 3.95939 7.52083 3.95833C6.53019 3.95728 5.68918 4.30376 4.99779 4.99779C4.3064 5.69182 3.95992 6.53283 3.95833 7.52083C3.95675 8.50883 4.30324 9.35011 4.99779 10.0447C5.69235 10.7392 6.53336 11.0854 7.52083 11.0833Z"
                fill="#5C2811"
              />
            </svg>
            <input className="search-input" type="text" placeholder="search" />
          </div>

          <h5 className="contact">Contact us</h5>

          <div className="nav-icons">
            <svg
              width="24"
              height="24"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.0834 25.5002C22.5109 25.5002 21.25 26.761 21.25 28.3335C21.25 29.0849 21.5485 29.8056 22.0799 30.337C22.6112 30.8683 23.3319 31.1668 24.0834 31.1668C24.8348 31.1668 25.5555 30.8683 26.0868 30.337C26.6182 29.8056 26.9167 29.0849 26.9167 28.3335C26.9167 27.582 26.6182 26.8614 26.0868 26.33C25.5555 25.7987 24.8348 25.5002 24.0834 25.5002ZM1.41669 2.8335V5.66683H4.25002L9.35002 16.4193L7.42335 19.8902C7.21085 20.2868 7.08335 20.7543 7.08335 21.2502C7.08335 22.0016 7.38186 22.7223 7.91322 23.2536C8.44457 23.785 9.16524 24.0835 9.91669 24.0835H26.9167V21.2502H10.5117C10.4178 21.2502 10.3277 21.2128 10.2613 21.1464C10.1948 21.08 10.1575 20.9899 10.1575 20.896C10.1575 20.8252 10.1717 20.7685 10.2 20.726L11.475 18.4168H22.0292C23.0917 18.4168 24.0267 17.8218 24.5084 16.9577L29.58 7.79183C29.6792 7.56516 29.75 7.32433 29.75 7.0835C29.75 6.70777 29.6008 6.34744 29.3351 6.08176C29.0694 5.81609 28.7091 5.66683 28.3334 5.66683H7.38085L6.04919 2.8335M9.91669 25.5002C8.34419 25.5002 7.08335 26.761 7.08335 28.3335C7.08335 29.0849 7.38186 29.8056 7.91322 30.337C8.44457 30.8683 9.16524 31.1668 9.91669 31.1668C10.6681 31.1668 11.3888 30.8683 11.9202 30.337C12.4515 29.8056 12.75 29.0849 12.75 28.3335C12.75 27.582 12.4515 26.8614 11.9202 26.33C11.3888 25.7987 10.6681 25.5002 9.91669 25.5002Z"
                fill="#532B2B"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0625 11.9531C29.0625 20.1563 16.4942 26.7961 15.9589 27.0703C15.8179 27.1438 15.6602 27.1822 15.5 27.1822C15.3398 27.1822 15.1821 27.1438 15.0411 27.0703C14.5058 26.7961 1.9375 20.1563 1.9375 11.9531C1.93974 10.0268 2.73146 8.18005 4.13897 6.81795C5.54647 5.45585 7.45481 4.68967 9.44531 4.6875C11.9459 4.6875 14.1353 5.72812 15.5 7.48711C16.8647 5.72812 19.0541 4.6875 21.5547 4.6875C23.5452 4.68967 25.4535 5.45585 26.861 6.81795C28.2685 8.18005 29.0603 10.0268 29.0625 11.9531Z"
                fill="#5C2811"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.33333 8.16667C9.33333 6.92899 9.825 5.742 10.7002 4.86683C11.5753 3.99167 12.7623 3.5 14 3.5C15.2377 3.5 16.4247 3.99167 17.2998 4.86683C18.175 5.742 18.6667 6.92899 18.6667 8.16667C18.6667 9.40434 18.175 10.5913 17.2998 11.4665C16.4247 12.3417 15.2377 12.8333 14 12.8333C12.7623 12.8333 11.5753 12.3417 10.7002 11.4665C9.825 10.5913 9.33333 9.40434 9.33333 8.16667ZM9.33333 15.1667C7.78624 15.1667 6.30251 15.7812 5.20854 16.8752C4.11458 17.9692 3.5 19.4529 3.5 21C3.5 21.9283 3.86875 22.8185 4.52513 23.4749C5.1815 24.1313 6.07174 24.5 7 24.5H21C21.9283 24.5 22.8185 24.1313 23.4749 23.4749C24.1313 22.8185 24.5 21.9283 24.5 21C24.5 19.4529 23.8854 17.9692 22.7915 16.8752C21.6975 15.7812 20.2138 15.1667 18.6667 15.1667H9.33333Z"
                fill="#5C2811"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
