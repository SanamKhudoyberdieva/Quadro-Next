import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import RegisterModal from "@/components/RegisterModal";
import { 
  setBranches,
  setCdnUrl,
  setGroups,
  setModifierGroups,
  setModifiers,
  setProductModifierChild,
  setProductModifiers,
  setProducts,
  setSliders,
  setNewProducts,
} from "@/store/actions";
import React, { useEffect } from "react";
import MenuModal from "@/components/MenuModal";
import MobileTabs from "@/components/MobileTabs";
import axios from "axios";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/get-data?refresh=true&_=" + Date.now());
      let result = res.data;
      dispatch(setGroups(result.groups));
      dispatch(setSliders(result.sliders));
      dispatch(setBranches(result.branches));
      dispatch(setCdnUrl(result.cdnUrl));
      dispatch(setProducts(result.products));
      dispatch(setNewProducts(result.newProducts));
      dispatch(setModifierGroups(result.modifierGroups));
      dispatch(setModifiers(result.modifiers));
      dispatch(setProductModifiers(result.productModifiers));
      dispatch(setProductModifierChild(result.productModifierChild));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <MenuModal />
      <MobileTabs />
      <AuthModal/>
      <RegisterModal/>
    </>
  );
};

export default Layout;
