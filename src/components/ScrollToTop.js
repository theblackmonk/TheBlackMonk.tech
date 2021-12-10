import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function ScrollToProjects() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 3350);
  }, [pathname]);

  return null;

}

//Element.scrollTo()