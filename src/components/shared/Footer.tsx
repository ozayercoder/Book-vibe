import Image from "next/image";

import logo from "@/assets/bookvibe.png";

const Footer = () => {
  return (
    <section className="bg-base-200">
      <footer className="footer flex sm:justify-between  container mx-auto  text-base-content p-10">
        <aside>
          <Image src={logo} alt="logo" className="h-20 w-20" />
          <p>
            BOOK VIBE
            <br />A heaven of book lovers.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
