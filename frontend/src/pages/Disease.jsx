import React from "react";
import CardD from "../components/CardD";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Diseases = () => {
  const cardData = [
    {
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      title: "𝑨𝒅𝒆𝒏𝒐𝒎𝒚𝒐𝒔𝒊𝒔",
      content: " 𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑻𝒉𝒆 𝒖𝒕𝒆𝒓𝒊𝒏𝒆 𝒍𝒊𝒏𝒊𝒏𝒈 𝒈𝒓𝒐𝒘𝒔 𝒊𝒏𝒕𝒐 𝒕𝒉𝒆 𝒎𝒖𝒔𝒄𝒍𝒆 𝒘𝒂𝒍𝒍, 𝒄𝒂𝒖𝒔𝒊𝒏𝒈 𝒔𝒆𝒗𝒆𝒓𝒆 𝒑𝒂𝒊𝒏 𝒂𝒏𝒅 𝒉𝒆𝒂𝒗𝒚 𝒑𝒆𝒓𝒊𝒐𝒅𝒔. 𝑰𝒕 𝒍𝒆𝒂𝒅𝒔 𝒕𝒐 𝒂𝒏 𝒆𝒏𝒍𝒂𝒓𝒈𝒆𝒅 𝒖𝒕𝒆𝒓𝒖𝒔 𝒂𝒏𝒅 𝒘𝒐𝒓𝒔𝒆𝒏𝒔 𝒐𝒗𝒆𝒓 𝒕𝒊𝒎𝒆. 𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑺𝒆𝒗𝒆𝒓𝒆 𝒑𝒆𝒍𝒗𝒊𝒄 𝒑𝒂𝒊𝒏 𝒅𝒖𝒓𝒊𝒏𝒈 𝒎𝒆𝒏𝒔𝒕𝒓𝒖𝒂𝒕𝒊𝒐𝒏 🔹 𝑯𝒆𝒂𝒗𝒚, 𝒑𝒓𝒐𝒍𝒐𝒏𝒈𝒆𝒅 𝒎𝒆𝒏𝒔𝒕𝒓𝒖𝒂𝒍 𝒃𝒍𝒆𝒆𝒅𝒊𝒏𝒈 🔹 𝑩𝒍𝒐𝒂𝒕𝒊𝒏𝒈 𝒂𝒏𝒅 𝒍𝒐𝒘𝒆𝒓 𝒃𝒂𝒄𝒌 𝒅𝒊𝒔𝒄𝒐𝒎𝒇𝒐𝒓𝒕 🔹 𝑷𝒂𝒊𝒏𝒇𝒖𝒍 𝒊𝒏𝒕𝒆𝒓𝒄𝒐𝒖𝒓𝒔𝒆 𝒐𝒓 𝒑𝒐𝒔𝒕-𝒑𝒆𝒓𝒊𝒐𝒅 𝒄𝒓𝒂𝒎𝒑𝒔",
      hoverContent:
        `   𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔:
        🔹 𝑪𝒉𝒓𝒐𝒏𝒊𝒄 𝒂𝒏𝒆𝒎𝒊𝒂 𝒂𝒏𝒅 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕 𝒇𝒂𝒕𝒊𝒈𝒖𝒆 
        🔹 𝑯𝒊𝒈𝒉𝒆𝒓 𝒓𝒊𝒔𝒌 𝒐𝒇 𝒊𝒏𝒇𝒆𝒓𝒕𝒊𝒍𝒊𝒕𝒚 𝒂𝒏𝒅 𝒎𝒊𝒔𝒄𝒂𝒓𝒓𝒊𝒂𝒈𝒆 
        🔹 𝑺𝒆𝒗𝒆𝒓𝒆 𝒑𝒂𝒊𝒏 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒏𝒈 𝒅𝒂𝒊𝒍𝒚 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒊𝒆𝒔 
        🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒅 𝒍𝒊𝒌𝒆𝒍𝒊𝒉𝒐𝒐𝒅 𝒐𝒇 𝒉𝒚𝒔𝒕𝒆𝒓𝒆𝒄𝒕𝒐𝒎𝒚  
            💡 𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 
        🔹 𝑴𝒂𝒊𝒏𝒕𝒂𝒊𝒏 𝒉𝒐𝒓𝒎𝒐𝒏𝒂𝒍 𝒃𝒂𝒍𝒂𝒏𝒄𝒆 𝒘𝒊𝒕𝒉 𝒍𝒊𝒇𝒆𝒔𝒕𝒚𝒍𝒆 𝒄𝒉𝒂𝒏𝒈𝒆𝒔  🔹 𝑬𝒂𝒓𝒍𝒚 𝒎𝒆𝒅𝒊𝒄𝒂𝒍 𝒄𝒉𝒆𝒄𝒌𝒖𝒑𝒔 𝒇𝒐𝒓 𝒅𝒊𝒂𝒈𝒏𝒐𝒔𝒊𝒔 🔹 𝑼𝒔𝒆 𝒐𝒇 𝒑𝒂𝒊𝒏 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝒕𝒆𝒄𝒉𝒏𝒊𝒒𝒖𝒆𝒔 🔹 𝑨𝒗𝒐𝒊𝒅 𝒆𝒙𝒄𝒆𝒔𝒔𝒊𝒗𝒆 𝒆𝒔𝒕𝒓𝒐𝒈𝒆𝒏 𝒊𝒏𝒕𝒂𝒌𝒆`,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      title: " 𝑽𝒖𝒍𝒗𝒐𝒅𝒚𝒏𝒊𝒂",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑪𝒉𝒓𝒐𝒏𝒊𝒄 𝒗𝒖𝒍𝒗𝒂𝒓 𝒑𝒂𝒊𝒏 𝒐𝒓 𝒅𝒊𝒔𝒄𝒐𝒎𝒇𝒐𝒓𝒕 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒂 𝒌𝒏𝒐𝒘𝒏 𝒄𝒂𝒖𝒔𝒆. 𝑰𝒕 𝒄𝒂𝒏 𝒑𝒆𝒓𝒔𝒊𝒔𝒕 𝒇𝒐𝒓 𝒎𝒐𝒏𝒕𝒉𝒔 𝒐𝒓 𝒚𝒆𝒂𝒓𝒔, 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒏𝒈 𝒅𝒂𝒊𝒍𝒚 𝒍𝒊𝒇𝒆 𝒂𝒏𝒅 𝒊𝒏𝒕𝒊𝒎𝒂𝒄𝒚.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑩𝒖𝒓𝒏𝒊𝒏𝒈 𝒐𝒓 𝒔𝒕𝒊𝒏𝒈𝒊𝒏𝒈 𝒑𝒂𝒊𝒏 𝒊𝒏 𝒕𝒉𝒆 𝒗𝒖𝒍𝒗𝒂 🔹 𝑷𝒂𝒊𝒏 𝒅𝒖𝒓𝒊𝒏𝒈 𝒐𝒓 𝒂𝒇𝒕𝒆𝒓 𝒊𝒏𝒕𝒆𝒓𝒄𝒐𝒖𝒓𝒔𝒆 🔹 𝑰𝒕𝒄𝒉𝒊𝒏𝒈, 𝒊𝒓𝒓𝒊𝒕𝒂𝒕𝒊𝒐𝒏, 𝒐𝒓 𝒓𝒂𝒘 𝒔𝒆𝒏𝒔𝒂𝒕𝒊𝒐𝒏 🔹 𝑫𝒊𝒔𝒄𝒐𝒎𝒇𝒐𝒓𝒕 𝒘𝒉𝒊𝒍𝒆 𝒔𝒊𝒕𝒕𝒊𝒏𝒈 𝒇𝒐𝒓 𝒍𝒐𝒏𝒈 𝒉𝒐𝒖𝒓𝒔",
      hoverContent:
        `𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 
        🔹 𝑬𝒎𝒐𝒕𝒊𝒐𝒏𝒂𝒍 𝒅𝒊𝒔𝒕𝒓𝒆𝒔𝒔 𝒂𝒏𝒅 𝒂𝒏𝒙𝒊𝒆𝒕𝒚 𝒊𝒔𝒔𝒖𝒆𝒔 🔹 𝑪𝒂𝒏 𝒍𝒆𝒂𝒅 𝒕𝒐 𝒑𝒂𝒊𝒏𝒇𝒖𝒍 𝒊𝒏𝒕𝒆𝒓𝒄𝒐𝒖𝒓𝒔𝒆 (𝒅𝒚𝒔𝒑𝒂𝒓𝒆𝒖𝒏𝒊𝒂) 🔹 𝑪𝒉𝒓𝒐𝒏𝒊𝒄 𝒅𝒊𝒔𝒄𝒐𝒎𝒇𝒐𝒓𝒕 𝒊𝒎𝒑𝒂𝒄𝒕𝒊𝒏𝒈 𝒅𝒂𝒊𝒍𝒚 𝒍𝒊𝒇𝒆 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒅 𝒓𝒊𝒔𝒌 𝒐𝒇 𝒅𝒆𝒑𝒓𝒆𝒔𝒔𝒊𝒐𝒏 𝒂𝒏𝒅 𝒘𝒊𝒕𝒉𝒅𝒓𝒂𝒘𝒂𝒍   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑾𝒆𝒂𝒓 𝒍𝒐𝒐𝒔𝒆 𝒄𝒐𝒕𝒕𝒐𝒏 𝒖𝒏𝒅𝒆𝒓𝒘𝒆𝒂𝒓 𝒅𝒂𝒊𝒍𝒚 🔹 𝑨𝒗𝒐𝒊𝒅 𝒔𝒄𝒆𝒏𝒕𝒆𝒅 𝒔𝒐𝒂𝒑𝒔 𝒂𝒏𝒅 𝒉𝒂𝒓𝒔𝒉 𝒄𝒉𝒆𝒎𝒊𝒄𝒂𝒍𝒔 🔹 𝑴𝒂𝒏𝒂𝒈𝒆 𝒔𝒕𝒓𝒆𝒔𝒔 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒓𝒆𝒍𝒂𝒙𝒂𝒕𝒊𝒐𝒏 𝒕𝒆𝒄𝒉𝒏𝒊𝒒𝒖𝒆𝒔 🔹 𝑼𝒔𝒆 𝒑𝒓𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒅 𝒏𝒖𝒎𝒃𝒊𝒏𝒈 𝒄𝒓𝒆𝒂𝒎𝒔 𝒐𝒓 𝒎𝒆𝒅𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔`,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "𝑼𝒕𝒆𝒓𝒊𝒏𝒆 𝑭𝒊𝒃𝒓𝒐𝒊𝒅𝒔",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑵𝒐𝒏-𝒄𝒂𝒏𝒄𝒆𝒓𝒐𝒖𝒔 𝒈𝒓𝒐𝒘𝒕𝒉𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒖𝒕𝒆𝒓𝒖𝒔 𝒕𝒉𝒂𝒕 𝒄𝒂𝒏 𝒄𝒂𝒖𝒔𝒆 𝒑𝒂𝒊𝒏, 𝒆𝒙𝒄𝒆𝒔𝒔𝒊𝒗𝒆 𝒃𝒍𝒆𝒆𝒅𝒊𝒏𝒈, 𝒂𝒏𝒅 𝒇𝒆𝒓𝒕𝒊𝒍𝒊𝒕𝒚 𝒊𝒔𝒔𝒖𝒆𝒔. 𝑻𝒉𝒆𝒚 𝒗𝒂𝒓𝒚 𝒊𝒏 𝒔𝒊𝒛𝒆 𝒂𝒏𝒅 𝒍𝒐𝒄𝒂𝒕𝒊𝒐𝒏.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑯𝒆𝒂𝒗𝒚 𝒂𝒏𝒅 𝒑𝒓𝒐𝒍𝒐𝒏𝒈𝒆𝒅 𝒎𝒆𝒏𝒔𝒕𝒓𝒖𝒂𝒍 𝒃𝒍𝒆𝒆𝒅𝒊𝒏𝒈 🔹 𝑷𝒆𝒍𝒗𝒊𝒄 𝒑𝒂𝒊𝒏 𝒐𝒓 𝒑𝒓𝒆𝒔𝒔𝒖𝒓𝒆 𝒊𝒏 𝒍𝒐𝒘𝒆𝒓 𝒂𝒃𝒅𝒐𝒎𝒆𝒏 🔹 𝑭𝒓𝒆𝒒𝒖𝒆𝒏𝒕 𝒖𝒓𝒊𝒏𝒂𝒕𝒊𝒐𝒏 𝒅𝒖𝒆 𝒕𝒐 𝒃𝒍𝒂𝒅𝒅𝒆𝒓 𝒑𝒓𝒆𝒔𝒔𝒖𝒓𝒆 🔹 𝑪𝒐𝒏𝒔𝒕𝒊𝒑𝒂𝒕𝒊𝒐𝒏 𝒐𝒓 𝒅𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒚 𝒆𝒎𝒑𝒕𝒚𝒊𝒏𝒈 𝒃𝒍𝒂𝒅𝒅𝒆𝒓",
      hoverContent:
        `𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒅 𝒓𝒊𝒔𝒌 𝒐𝒇 𝒂𝒏𝒆𝒎𝒊𝒂 𝒇𝒓𝒐𝒎 𝒃𝒍𝒐𝒐𝒅 𝒍𝒐𝒔𝒔 🔹 𝑪𝒂𝒏 𝒄𝒂𝒖𝒔𝒆 𝒑𝒓𝒆𝒈𝒏𝒂𝒏𝒄𝒚 𝒄𝒐𝒎𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔 🔹 𝑺𝒆𝒗𝒆𝒓𝒆 𝒑𝒂𝒊𝒏 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒏𝒈 𝒎𝒐𝒃𝒊𝒍𝒊𝒕𝒚 𝒂𝒏𝒅 𝒉𝒆𝒂𝒍𝒕𝒉 🔹 𝑴𝒂𝒚 𝒓𝒆𝒒𝒖𝒊𝒓𝒆 𝒔𝒖𝒓𝒈𝒊𝒄𝒂𝒍 𝒓𝒆𝒎𝒐𝒗𝒂𝒍 (𝒎𝒚𝒐𝒎𝒆𝒄𝒕𝒐𝒎𝒚)   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑴𝒂𝒊𝒏𝒕𝒂𝒊𝒏 𝒂 𝒃𝒂𝒍𝒂𝒏𝒄𝒆𝒅 𝒅𝒊𝒆𝒕, 𝒓𝒊𝒄𝒉 𝒊𝒏 𝒊𝒓𝒐𝒏 🔹 𝑴𝒂𝒏𝒂𝒈𝒆 𝒘𝒆𝒊𝒈𝒉𝒕 𝒂𝒏𝒅 𝒉𝒐𝒓𝒎𝒐𝒏𝒆 𝒍𝒆𝒗𝒆𝒍𝒔 🔹 𝑹𝒆𝒈𝒖𝒍𝒂𝒓 𝒈𝒚𝒏𝒆𝒄𝒐𝒍𝒐𝒈𝒊𝒄𝒂𝒍 𝒄𝒉𝒆𝒄𝒌-𝒖𝒑𝒔 🔹 𝑪𝒐𝒏𝒔𝒊𝒅𝒆𝒓 𝒃𝒊𝒓𝒕𝒉 𝒄𝒐𝒏𝒕𝒓𝒐𝒍 𝒇𝒐𝒓 𝒔𝒚𝒎𝒑𝒕𝒐𝒎 𝒓𝒆𝒍𝒊𝒆𝒇`,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
      title: "𝑩𝒂𝒄𝒕𝒆𝒓𝒊𝒂𝒍 𝑽𝒂𝒈𝒊𝒏𝒐𝒔𝒊𝒔 (𝑩𝑽)",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑨𝒏 𝒊𝒎𝒃𝒂𝒍𝒂𝒏𝒄𝒆 𝒐𝒇 𝒗𝒂𝒈𝒊𝒏𝒂𝒍 𝒃𝒂𝒄𝒕𝒆𝒓𝒊𝒂 𝒍𝒆𝒂𝒅𝒊𝒏𝒈 𝒕𝒐 𝒅𝒊𝒔𝒄𝒉𝒂𝒓𝒈𝒆, 𝒐𝒅𝒐𝒓, 𝒂𝒏𝒅 𝒅𝒊𝒔𝒄𝒐𝒎𝒇𝒐𝒓𝒕. 𝑰𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒄𝒐𝒎𝒎𝒐𝒏 𝒗𝒂𝒈𝒊𝒏𝒂𝒍 𝒊𝒏𝒇𝒆𝒄𝒕𝒊𝒐𝒏 𝒊𝒏 𝒘𝒐𝒎𝒆𝒏.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑻𝒉𝒊𝒏, 𝒈𝒓𝒂𝒚𝒊𝒔𝒉-𝒘𝒉𝒊𝒕𝒆 𝒗𝒂𝒈𝒊𝒏𝒂𝒍 𝒅𝒊𝒔𝒄𝒉𝒂𝒓𝒈𝒆 🔹 𝑺𝒕𝒓𝒐𝒏𝒈 𝒇𝒊𝒔𝒉𝒚 𝒐𝒅𝒐𝒓, 𝒆𝒔𝒑𝒆𝒄𝒊𝒂𝒍𝒍𝒚 𝒂𝒇𝒕𝒆𝒓 𝒔𝒆𝒙 🔹 𝑰𝒕𝒄𝒉𝒊𝒏𝒈 𝒐𝒓 𝒃𝒖𝒓𝒏𝒊𝒏𝒈 𝒂𝒓𝒐𝒖𝒏𝒅 𝒕𝒉𝒆 𝒗𝒂𝒈𝒊𝒏𝒂 🔹 𝑴𝒊𝒍𝒅 𝒑𝒂𝒊𝒏 𝒐𝒓 𝒅𝒊𝒔𝒄𝒐𝒎𝒇𝒐𝒓𝒕 𝒘𝒉𝒊𝒍𝒆 𝒖𝒓𝒊𝒏𝒂𝒕𝒊𝒏𝒈",
      hoverContent:
        `𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑯𝒊𝒈𝒉𝒆𝒓 𝒓𝒊𝒔𝒌 𝒐𝒇 𝑺𝑻𝑰𝒔 𝒂𝒏𝒅 𝒑𝒆𝒍𝒗𝒊𝒄 𝒊𝒏𝒇𝒆𝒄𝒕𝒊𝒐𝒏𝒔 🔹 𝑪𝒂𝒏 𝒄𝒂𝒖𝒔𝒆 𝒑𝒓𝒆𝒈𝒏𝒂𝒏𝒄𝒚 𝒄𝒐𝒎𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒅 𝒄𝒉𝒂𝒏𝒄𝒆𝒔 𝒐𝒇 𝒓𝒆𝒄𝒖𝒓𝒓𝒆𝒏𝒕 𝒊𝒏𝒇𝒆𝒄𝒕𝒊𝒐𝒏𝒔 🔹 𝑫𝒊𝒔𝒓𝒖𝒑𝒕𝒔 𝒗𝒂𝒈𝒊𝒏𝒂𝒍 𝒉𝒆𝒂𝒍𝒕𝒉 𝒂𝒏𝒅 𝒊𝒎𝒎𝒖𝒏𝒊𝒕𝒚   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑨𝒗𝒐𝒊𝒅 𝒅𝒐𝒖𝒄𝒉𝒊𝒏𝒈 𝒂𝒏𝒅 𝒉𝒂𝒓𝒔𝒉 𝒔𝒐𝒂𝒑𝒔 🔹 𝑼𝒔𝒆 𝒑𝒓𝒐𝒕𝒆𝒄𝒕𝒊𝒐𝒏 𝒅𝒖𝒓𝒊𝒏𝒈 𝒔𝒆𝒙𝒖𝒂𝒍 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒊𝒆𝒔 🔹 𝑴𝒂𝒊𝒏𝒕𝒂𝒊𝒏 𝒈𝒐𝒐𝒅 𝒗𝒂𝒈𝒊𝒏𝒂𝒍 𝒉𝒚𝒈𝒊𝒆𝒏𝒆 𝒅𝒂𝒊𝒍𝒚 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒃𝒊𝒐𝒕𝒊𝒄-𝒓𝒊𝒄𝒉 𝒇𝒐𝒐𝒅 𝒊𝒏𝒕𝒂𝒌𝒆`,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      title: "𝑯𝒚𝒑𝒐𝒕𝒉𝒚𝒓𝒐𝒊𝒅𝒊𝒔𝒎 (𝑾𝒐𝒎𝒆𝒏-𝑺𝒑𝒆𝒄𝒊𝒇𝒊𝒄)",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑨 𝒕𝒉𝒚𝒓𝒐𝒊𝒅 𝒉𝒐𝒓𝒎𝒐𝒏𝒆 𝒅𝒆𝒇𝒊𝒄𝒊𝒆𝒏𝒄𝒚 𝒕𝒉𝒂𝒕 𝒔𝒍𝒐𝒘𝒔 𝒎𝒆𝒕𝒂𝒃𝒐𝒍𝒊𝒔𝒎, 𝒍𝒆𝒂𝒅𝒊𝒏𝒈 𝒕𝒐 𝒇𝒂𝒕𝒊𝒈𝒖𝒆, 𝒘𝒆𝒊𝒈𝒉𝒕 𝒈𝒂𝒊𝒏, 𝒂𝒏𝒅 𝒉𝒐𝒓𝒎𝒐𝒏𝒂𝒍 𝒊𝒎𝒃𝒂𝒍𝒂𝒏𝒄𝒆𝒔.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑼𝒏𝒆𝒙𝒑𝒍𝒂𝒊𝒏𝒆𝒅 𝒘𝒆𝒊𝒈𝒉𝒕 𝒈𝒂𝒊𝒏 𝒅𝒆𝒔𝒑𝒊𝒕𝒆 𝒅𝒊𝒆𝒕 🔹 𝑪𝒐𝒏𝒔𝒕𝒂𝒏𝒕 𝒇𝒂𝒕𝒊𝒈𝒖𝒆 𝒂𝒏𝒅 𝒔𝒍𝒖𝒈𝒈𝒊𝒔𝒉𝒏𝒆𝒔𝒔 🔹 𝑫𝒓𝒚 𝒔𝒌𝒊𝒏, 𝒃𝒓𝒊𝒕𝒕𝒍𝒆 𝒉𝒂𝒊𝒓, 𝒂𝒏𝒅 𝒏𝒂𝒊𝒍 𝒊𝒔𝒔𝒖𝒆𝒔 🔹 𝑴𝒆𝒏𝒔𝒕𝒓𝒖𝒂𝒍 𝒊𝒓𝒓𝒆𝒈𝒖𝒍𝒂𝒓𝒊𝒕𝒊𝒆𝒔 𝒂𝒏𝒅 𝒊𝒏𝒇𝒆𝒓𝒕𝒊𝒍𝒊𝒕𝒚",
      hoverContent:
        `𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑪𝒂𝒏 𝒍𝒆𝒂𝒅 𝒕𝒐 𝒊𝒏𝒇𝒆𝒓𝒕𝒊𝒍𝒊𝒕𝒚 𝒐𝒓 𝒑𝒓𝒆𝒈𝒏𝒂𝒏𝒄𝒚 𝒊𝒔𝒔𝒖𝒆𝒔 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒅 𝒓𝒊𝒔𝒌 𝒐𝒇 𝒉𝒆𝒂𝒓𝒕 𝒅𝒊𝒔𝒆𝒂𝒔𝒆𝒔 🔹 𝑺𝒍𝒐𝒘𝒔 𝒅𝒐𝒘𝒏 𝒎𝒆𝒕𝒂𝒃𝒐𝒍𝒊𝒔𝒎, 𝒄𝒂𝒖𝒔𝒊𝒏𝒈 𝒐𝒃𝒆𝒔𝒊𝒕𝒚 🔹 𝑯𝒊𝒈𝒉𝒆𝒓 𝒄𝒉𝒂𝒏𝒄𝒆𝒔 𝒐𝒇 𝒅𝒆𝒑𝒓𝒆𝒔𝒔𝒊𝒐𝒏 𝒂𝒏𝒅 𝒎𝒆𝒎𝒐𝒓𝒚 𝒍𝒐𝒔𝒔   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑹𝒆𝒈𝒖𝒍𝒂𝒓 𝒕𝒉𝒚𝒓𝒐𝒊𝒅 𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏 𝒕𝒆𝒔𝒕𝒔 🔹 𝑩𝒂𝒍𝒂𝒏𝒄𝒆𝒅 𝒅𝒊𝒆𝒕 𝒘𝒊𝒕𝒉 𝒊𝒐𝒅𝒊𝒏𝒆-𝒓𝒊𝒄𝒉 𝒇𝒐𝒐𝒅𝒔 🔹 𝑺𝒕𝒓𝒆𝒔𝒔 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒆𝒙𝒆𝒓𝒄𝒊𝒔𝒆 🔹 𝑻𝒂𝒌𝒆 𝒑𝒓𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒅 𝒕𝒉𝒚𝒓𝒐𝒊𝒅 𝒎𝒆𝒅𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒑𝒆𝒓𝒍𝒚`,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      title: "𝑪𝒉𝒓𝒐𝒏𝒊𝒄 𝑭𝒂𝒕𝒊𝒈𝒖𝒆 𝑺𝒚𝒏𝒅𝒓𝒐𝒎𝒆 (𝑪𝑭𝑺)",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑨 𝒍𝒐𝒏𝒈-𝒕𝒆𝒓𝒎 𝒊𝒍𝒍𝒏𝒆𝒔𝒔 𝒄𝒂𝒖𝒔𝒊𝒏𝒈 𝒆𝒙𝒕𝒓𝒆𝒎𝒆 𝒇𝒂𝒕𝒊𝒈𝒖𝒆 𝒕𝒉𝒂𝒕 𝒅𝒐𝒆𝒔𝒏’𝒕 𝒊𝒎𝒑𝒓𝒐𝒗𝒆 𝒘𝒊𝒕𝒉 𝒓𝒆𝒔𝒕 𝒂𝒏𝒅 𝒊𝒎𝒑𝒂𝒄𝒕𝒔 𝒎𝒆𝒏𝒕𝒂𝒍 𝒂𝒏𝒅 𝒑𝒉𝒚𝒔𝒊𝒄𝒂𝒍 𝒉𝒆𝒂𝒍𝒕𝒉.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑬𝒙𝒕𝒓𝒆𝒎𝒆 𝒇𝒂𝒕𝒊𝒈𝒖𝒆 𝒍𝒂𝒔𝒕𝒊𝒏𝒈 𝒐𝒗𝒆𝒓 𝒔𝒊𝒙 𝒎𝒐𝒏𝒕𝒉𝒔 🔹 𝑱𝒐𝒊𝒏𝒕 𝒑𝒂𝒊𝒏 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒓𝒆𝒅𝒏𝒆𝒔𝒔 𝒐𝒓 𝒔𝒘𝒆𝒍𝒍𝒊𝒏𝒈 🔹 𝑴𝒆𝒎𝒐𝒓𝒚 𝒐𝒓 𝒄𝒐𝒏𝒄𝒆𝒏𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒅𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒊𝒆𝒔 🔹 𝑫𝒊𝒛𝒛𝒊𝒏𝒆𝒔𝒔 𝒂𝒏𝒅 𝒏𝒐𝒏-𝒓𝒆𝒇𝒓𝒆𝒔𝒉𝒊𝒏𝒈 𝒔𝒍𝒆𝒆𝒑",
      hoverContent:
        `𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑳𝒐𝒏𝒈-𝒕𝒆𝒓𝒎 𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒚 𝒂𝒏𝒅 𝒘𝒐𝒓𝒌 𝒍𝒊𝒎𝒊𝒕𝒂𝒕𝒊𝒐𝒏𝒔 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒅 𝒓𝒊𝒔𝒌 𝒐𝒇 𝒂𝒏𝒙𝒊𝒆𝒕𝒚 𝒂𝒏𝒅 𝒅𝒆𝒑𝒓𝒆𝒔𝒔𝒊𝒐𝒏 🔹 𝑪𝒂𝒏 𝒄𝒂𝒖𝒔𝒆 𝒊𝒎𝒎𝒖𝒏𝒆 𝒔𝒚𝒔𝒕𝒆𝒎 𝒅𝒚𝒔𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏 🔹 𝑳𝒆𝒂𝒅𝒔 𝒕𝒐 𝒇𝒓𝒆𝒒𝒖𝒆𝒏𝒕 𝒃𝒐𝒅𝒚 𝒑𝒂𝒊𝒏 𝒂𝒏𝒅 𝒘𝒆𝒂𝒌𝒏𝒆𝒔𝒔   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑮𝒆𝒕 𝒑𝒓𝒐𝒑𝒆𝒓 𝒓𝒆𝒔𝒕 𝒂𝒏𝒅 𝒎𝒂𝒊𝒏𝒕𝒂𝒊𝒏 𝒂 𝒔𝒍𝒆𝒆𝒑 𝒔𝒄𝒉𝒆𝒅𝒖𝒍𝒆 🔹 𝑹𝒆𝒅𝒖𝒄𝒆 𝒔𝒕𝒓𝒆𝒔𝒔 𝒕𝒉𝒓𝒐𝒖𝒈𝒉 𝒚𝒐𝒈𝒂 𝒂𝒏𝒅 𝒕𝒉𝒆𝒓𝒂𝒑𝒚 🔹 𝑭𝒐𝒍𝒍𝒐𝒘 𝒂 𝒏𝒖𝒕𝒓𝒊𝒆𝒏𝒕-𝒓𝒊𝒄𝒉 𝒂𝒏𝒅 𝒂𝒏𝒕𝒊-𝒊𝒏𝒇𝒍𝒂𝒎𝒎𝒂𝒕𝒐𝒓𝒚 𝒅𝒊𝒆𝒕 🔹 𝑬𝒏𝒈𝒂𝒈𝒆 𝒊𝒏 𝒍𝒊𝒈𝒉𝒕 𝒑𝒉𝒚𝒔𝒊𝒄𝒂𝒍 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒅𝒂𝒊𝒍𝒚`,
    },

    {
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      title: "𝑰𝒏𝒕𝒆𝒓𝒔𝒕𝒊𝒕𝒊𝒂𝒍 𝑪𝒚𝒔𝒕𝒊𝒕𝒊𝒔 (𝑰𝑪)",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑨 𝒄𝒉𝒓𝒐𝒏𝒊𝒄 𝒃𝒍𝒂𝒅𝒅𝒆𝒓 𝒄𝒐𝒏𝒅𝒊𝒕𝒊𝒐𝒏 𝒄𝒂𝒖𝒔𝒊𝒏𝒈 𝒑𝒂𝒊𝒏, 𝒑𝒓𝒆𝒔𝒔𝒖𝒓𝒆, 𝒂𝒏𝒅 𝒇𝒓𝒆𝒒𝒖𝒆𝒏𝒕 𝒖𝒓𝒊𝒏𝒂𝒕𝒊𝒐𝒏, 𝒐𝒇𝒕𝒆𝒏 𝒎𝒊𝒔𝒕𝒂𝒌𝒆𝒏 𝒇𝒐𝒓 𝑼𝑻𝑰𝒔.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑭𝒓𝒆𝒒𝒖𝒆𝒏𝒕 𝒖𝒓𝒈𝒆 𝒕𝒐 𝒖𝒓𝒊𝒏𝒂𝒕𝒆 (𝒆𝒗𝒆𝒏 𝒂𝒕 𝒏𝒊𝒈𝒉𝒕) 🔹 𝑩𝒍𝒂𝒅𝒅𝒆𝒓 𝒑𝒓𝒆𝒔𝒔𝒖𝒓𝒆 𝒂𝒏𝒅 𝒃𝒖𝒓𝒏𝒊𝒏𝒈 𝒑𝒂𝒊𝒏 🔹 𝑫𝒊𝒔𝒄𝒐𝒎𝒇𝒐𝒓𝒕 𝒅𝒖𝒓𝒊𝒏𝒈 𝒔𝒆𝒙𝒖𝒂𝒍 𝒊𝒏𝒕𝒆𝒓𝒄𝒐𝒖𝒓𝒔𝒆 🔹 𝑷𝒆𝒍𝒗𝒊𝒄 𝒑𝒂𝒊𝒏 𝒘𝒐𝒓𝒔𝒆𝒏𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝒎𝒆𝒏𝒔𝒕𝒓𝒖𝒂𝒕𝒊𝒐𝒏",
      hoverContent:
        ` 𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑪𝒂𝒏 𝒂𝒇𝒇𝒆𝒄𝒕 𝒔𝒆𝒙𝒖𝒂𝒍 𝒂𝒏𝒅 𝒆𝒎𝒐𝒕𝒊𝒐𝒏𝒂𝒍 𝒘𝒆𝒍𝒍-𝒃𝒆𝒊𝒏𝒈 🔹 𝑴𝒂𝒚 𝒍𝒆𝒂𝒅 𝒕𝒐 𝒄𝒉𝒓𝒐𝒏𝒊𝒄 𝒑𝒆𝒍𝒗𝒊𝒄 𝒑𝒂𝒊𝒏 𝒔𝒚𝒏𝒅𝒓𝒐𝒎𝒆 🔹 𝑺𝒍𝒆𝒆𝒑 𝒅𝒊𝒔𝒕𝒖𝒓𝒃𝒂𝒏𝒄𝒆𝒔 𝒅𝒖𝒆 𝒕𝒐 𝒇𝒓𝒆𝒒𝒖𝒆𝒏𝒕 𝒖𝒓𝒊𝒏𝒂𝒕𝒊𝒐𝒏 🔹 𝑫𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒚 𝒉𝒐𝒍𝒅𝒊𝒏𝒈 𝒖𝒓𝒊𝒏𝒆, 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒏𝒈 𝒄𝒐𝒏𝒇𝒊𝒅𝒆𝒏𝒄𝒆   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑨𝒗𝒐𝒊𝒅 𝒂𝒄𝒊𝒅𝒊𝒄 𝒂𝒏𝒅 𝒃𝒍𝒂𝒅𝒅𝒆𝒓-𝒊𝒓𝒓𝒊𝒕𝒂𝒏𝒕 𝒇𝒐𝒐𝒅𝒔 🔹 𝑷𝒓𝒂𝒄𝒕𝒊𝒄𝒆 𝒑𝒆𝒍𝒗𝒊𝒄 𝒇𝒍𝒐𝒐𝒓 𝒓𝒆𝒍𝒂𝒙𝒂𝒕𝒊𝒐𝒏 𝒕𝒆𝒄𝒉𝒏𝒊𝒒𝒖𝒆𝒔 🔹 𝑫𝒓𝒊𝒏𝒌 𝒑𝒍𝒆𝒏𝒕𝒚 𝒐𝒇 𝒘𝒂𝒕𝒆𝒓 𝒂𝒏𝒅 𝒔𝒕𝒂𝒚 𝒉𝒚𝒅𝒓𝒂𝒕𝒆𝒅 🔹 𝑳𝒊𝒎𝒊𝒕 𝒄𝒂𝒇𝒇𝒆𝒊𝒏𝒆 𝒂𝒏𝒅 𝒂𝒍𝒄𝒐𝒉𝒐𝒍 𝒊𝒏𝒕𝒂𝒌𝒆`,
    },

    {
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      title: "𝑴𝒂𝒔𝒕𝒊𝒕𝒊𝒔 (𝑵𝒐𝒏-𝑩𝒓𝒆𝒂𝒔𝒕𝒇𝒆𝒆𝒅𝒊𝒏𝒈 𝑾𝒐𝒎𝒆𝒏)",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑨 𝒃𝒓𝒆𝒂𝒔𝒕 𝒕𝒊𝒔𝒔𝒖𝒆 𝒊𝒏𝒇𝒆𝒄𝒕𝒊𝒐𝒏 𝒄𝒂𝒖𝒔𝒊𝒏𝒈 𝒑𝒂𝒊𝒏, 𝒔𝒘𝒆𝒍𝒍𝒊𝒏𝒈, 𝒂𝒏𝒅 𝒇𝒆𝒗𝒆𝒓. 𝑰𝒕 𝒄𝒂𝒏 𝒂𝒍𝒔𝒐 𝒐𝒄𝒄𝒖𝒓 𝒊𝒏 𝒘𝒐𝒎𝒆𝒏 𝒘𝒉𝒐 𝒂𝒓𝒆 𝒏𝒐𝒕 𝒃𝒓𝒆𝒂𝒔𝒕𝒇𝒆𝒆𝒅𝒊𝒏𝒈.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑩𝒓𝒆𝒂𝒔𝒕 𝒔𝒘𝒆𝒍𝒍𝒊𝒏𝒈 𝒂𝒏𝒅 𝒕𝒆𝒏𝒅𝒆𝒓𝒏𝒆𝒔𝒔 🔹 𝑺𝒌𝒊𝒏 𝒓𝒆𝒅𝒏𝒆𝒔𝒔 𝒂𝒏𝒅 𝒘𝒂𝒓𝒎𝒕𝒉 𝒊𝒏 𝒕𝒉𝒆 𝒂𝒓𝒆𝒂 🔹 𝑭𝒆𝒗𝒆𝒓 𝒂𝒏𝒅 𝒇𝒍𝒖-𝒍𝒊𝒌𝒆 𝒃𝒐𝒅𝒚 𝒄𝒉𝒊𝒍𝒍𝒔 🔹 𝑷𝒂𝒊𝒏 𝒐𝒓 𝒍𝒖𝒎𝒑𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒂𝒇𝒇𝒆𝒄𝒕𝒆𝒅 𝒃𝒓𝒆𝒂𝒔𝒕",
      hoverContent:
        ` 𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑪𝒂𝒏 𝒍𝒆𝒂𝒅 𝒕𝒐 𝒑𝒖𝒔 𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒂𝒃𝒔𝒄𝒆𝒔𝒔𝒆𝒔 🔹 𝑼𝒏𝒕𝒓𝒆𝒂𝒕𝒆𝒅 𝒄𝒂𝒔𝒆𝒔 𝒎𝒂𝒚 𝒓𝒆𝒒𝒖𝒊𝒓𝒆 𝒔𝒖𝒓𝒈𝒆𝒓𝒚 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒔 𝒄𝒉𝒂𝒏𝒄𝒆𝒔 𝒐𝒇 𝒄𝒉𝒓𝒐𝒏𝒊𝒄 𝒊𝒏𝒇𝒆𝒄𝒕𝒊𝒐𝒏𝒔 🔹 𝑪𝒂𝒏 𝒄𝒂𝒖𝒔𝒆 𝒔𝒆𝒗𝒆𝒓𝒆 𝒑𝒂𝒊𝒏 𝒊𝒏 𝒅𝒂𝒊𝒍𝒚 𝒍𝒊𝒇𝒆   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑴𝒂𝒊𝒏𝒕𝒂𝒊𝒏 𝒈𝒐𝒐𝒅 𝒃𝒓𝒆𝒂𝒔𝒕 𝒉𝒚𝒈𝒊𝒆𝒏𝒆 𝒅𝒂𝒊𝒍𝒚 🔹 𝑨𝒗𝒐𝒊𝒅 𝒕𝒊𝒈𝒉𝒕-𝒇𝒊𝒕𝒕𝒊𝒏𝒈 𝒃𝒓𝒂𝒔 𝒂𝒏𝒅 𝒑𝒓𝒆𝒔𝒔𝒖𝒓𝒆 🔹 𝑺𝒕𝒂𝒚 𝒉𝒚𝒅𝒓𝒂𝒕𝒆𝒅 𝒂𝒏𝒅 𝒆𝒂𝒕 𝒊𝒎𝒎𝒖𝒏𝒆-𝒃𝒐𝒐𝒔𝒕𝒊𝒏𝒈 𝒇𝒐𝒐𝒅𝒔 🔹 𝑺𝒆𝒆𝒌 𝒆𝒂𝒓𝒍𝒚 𝒕𝒓𝒆𝒂𝒕𝒎𝒆𝒏𝒕 𝒊𝒇 𝒔𝒚𝒎𝒑𝒕𝒐𝒎𝒔 𝒂𝒓𝒊𝒔𝒆`,
    },

    {
      imageUrl: "dis9.jpg",
      title: "𝑻𝒖𝒓𝒏𝒆𝒓 𝑺𝒚𝒏𝒅𝒓𝒐𝒎𝒆",
      content: "𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑨 𝒈𝒆𝒏𝒆𝒕𝒊𝒄 𝒄𝒐𝒏𝒅𝒊𝒕𝒊𝒐𝒏 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒏𝒈 𝒐𝒏𝒍𝒚 𝒘𝒐𝒎𝒆𝒏, 𝒍𝒆𝒂𝒅𝒊𝒏𝒈 𝒕𝒐 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕𝒂𝒍 𝒅𝒆𝒍𝒂𝒚𝒔, 𝒊𝒏𝒇𝒆𝒓𝒕𝒊𝒍𝒊𝒕𝒚, 𝒂𝒏𝒅 𝒉𝒆𝒂𝒓𝒕 𝒊𝒔𝒔𝒖𝒆𝒔.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑺𝒉𝒐𝒓𝒕 𝒉𝒆𝒊𝒈𝒉𝒕 𝒂𝒏𝒅 𝒅𝒆𝒍𝒂𝒚𝒆𝒅 𝒑𝒖𝒃𝒆𝒓𝒕𝒚 🔹 𝑯𝒆𝒂𝒓𝒕 𝒂𝒏𝒅 𝒌𝒊𝒅𝒏𝒆𝒚 𝒂𝒃𝒏𝒐𝒓𝒎𝒂𝒍𝒊𝒕𝒊𝒆𝒔 🔹 𝑰𝒏𝒇𝒆𝒓𝒕𝒊𝒍𝒊𝒕𝒚 𝒅𝒖𝒆 𝒕𝒐 𝒖𝒏𝒅𝒆𝒓𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒅 𝒐𝒗𝒂𝒓𝒊𝒆𝒔 🔹 𝑳𝒐𝒘 𝒃𝒐𝒏𝒆 𝒅𝒆𝒏𝒔𝒊𝒕𝒚 𝒂𝒏𝒅 𝒇𝒓𝒆𝒒𝒖𝒆𝒏𝒕 𝒇𝒓𝒂𝒄𝒕𝒖𝒓𝒆𝒔",
      hoverContent:
        ` 𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑰𝒏𝒄𝒓𝒆𝒂𝒔𝒆𝒅 𝒓𝒊𝒔𝒌 𝒐𝒇 𝒐𝒔𝒕𝒆𝒐𝒑𝒐𝒓𝒐𝒔𝒊𝒔 𝒍𝒂𝒕𝒆𝒓 𝒊𝒏 𝒍𝒊𝒇𝒆 🔹 𝑪𝒂𝒏 𝒍𝒆𝒂𝒅 𝒕𝒐 𝒉𝒆𝒂𝒓𝒕 𝒅𝒆𝒇𝒆𝒄𝒕𝒔 𝒐𝒓 𝒄𝒐𝒎𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔 🔹 𝑴𝒂𝒚 𝒄𝒂𝒖𝒔𝒆 𝒍𝒆𝒂𝒓𝒏𝒊𝒏𝒈 𝒅𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒊𝒆𝒔 𝒂𝒏𝒅 𝒂𝒏𝒙𝒊𝒆𝒕𝒚 🔹 𝑹𝒆𝒒𝒖𝒊𝒓𝒆𝒔 𝒍𝒊𝒇𝒆𝒍𝒐𝒏𝒈 𝒉𝒐𝒓𝒎𝒐𝒏𝒆 𝒕𝒉𝒆𝒓𝒂𝒑𝒚   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑹𝒆𝒈𝒖𝒍𝒂𝒓 𝒄𝒉𝒆𝒄𝒌-𝒖𝒑𝒔 𝒇𝒐𝒓 𝒉𝒆𝒂𝒓𝒕 𝒉𝒆𝒂𝒍𝒕𝒉 🔹 𝑬𝒂𝒓𝒍𝒚 𝒉𝒐𝒓𝒎𝒐𝒏𝒆 𝒕𝒉𝒆𝒓𝒂𝒑𝒚 𝒇𝒐𝒓 𝒈𝒓𝒐𝒘𝒕𝒉 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 🔹 𝑴𝒂𝒊𝒏𝒕𝒂𝒊𝒏 𝒂 𝒄𝒂𝒍𝒄𝒊𝒖𝒎-𝒓𝒊𝒄𝒉 𝒅𝒊𝒆𝒕 𝒇𝒐𝒓 𝒃𝒐𝒏𝒆𝒔 🔹 𝑮𝒆𝒏𝒆𝒕𝒊𝒄 𝒄𝒐𝒖𝒏𝒔𝒆𝒍𝒊𝒏𝒈 𝒇𝒐𝒓 𝒓𝒆𝒑𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒗𝒆 𝒐𝒑𝒕𝒊𝒐𝒏𝒔`,
    },

    {
      imageUrl: "dis10 (1).jpg",
      title: "𝑳𝒊𝒄𝒉𝒆𝒏 𝑺𝒄𝒍𝒆𝒓𝒐𝒔𝒖𝒔",
      content: " 𝑾𝒉𝒂𝒕 𝑰𝒕 𝑰𝒔: 𝑨 𝒓𝒂𝒓𝒆 𝒔𝒌𝒊𝒏 𝒄𝒐𝒏𝒅𝒊𝒕𝒊𝒐𝒏 𝒄𝒂𝒖𝒔𝒊𝒏𝒈 𝒘𝒉𝒊𝒕𝒆 𝒑𝒂𝒕𝒄𝒉𝒆𝒔, 𝒊𝒕𝒄𝒉𝒊𝒏𝒈, 𝒂𝒏𝒅 𝒑𝒂𝒊𝒏 𝒊𝒏 𝒕𝒉𝒆 𝒈𝒆𝒏𝒊𝒕𝒂𝒍 𝒂𝒓𝒆𝒂, 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒏𝒈 𝒒𝒖𝒂𝒍𝒊𝒕𝒚 𝒐𝒇 𝒍𝒊𝒇𝒆.   𝑪𝒐𝒎𝒎𝒐𝒏 𝑺𝒚𝒎𝒑𝒕𝒐𝒎𝒔: 🔹 𝑾𝒉𝒊𝒕𝒆 𝒑𝒂𝒕𝒄𝒉𝒆𝒔 𝒐𝒏 𝒗𝒖𝒍𝒗𝒂𝒓 𝒔𝒌𝒊𝒏 🔹 𝑺𝒆𝒗𝒆𝒓𝒆 𝒊𝒕𝒄𝒉𝒊𝒏𝒈 𝒂𝒏𝒅 𝒃𝒖𝒓𝒏𝒊𝒏𝒈 𝒔𝒆𝒏𝒔𝒂𝒕𝒊𝒐𝒏 🔹 𝑷𝒂𝒊𝒏𝒇𝒖𝒍 𝒖𝒓𝒊𝒏𝒂𝒕𝒊𝒐𝒏 𝒐𝒓 𝒊𝒏𝒕𝒆𝒓𝒄𝒐𝒖𝒓𝒔𝒆 🔹 𝑺𝒌𝒊𝒏 𝒕𝒉𝒊𝒏𝒏𝒊𝒏𝒈 𝒂𝒏𝒅 𝒆𝒂𝒔𝒚 𝒃𝒓𝒖𝒊𝒔𝒊𝒏𝒈",
      hoverContent:
        `𝑰𝒎𝒑𝒂𝒄𝒕 & 𝑹𝒊𝒔𝒌𝒔: 🔹 𝑯𝒊𝒈𝒉𝒆𝒓 𝒓𝒊𝒔𝒌 𝒐𝒇 𝒗𝒖𝒍𝒗𝒂𝒓 𝒔𝒌𝒊𝒏 𝒄𝒂𝒏𝒄𝒆𝒓 🔹 𝑪𝒉𝒓𝒐𝒏𝒊𝒄 𝒑𝒂𝒊𝒏 𝒂𝒇𝒇𝒆𝒄𝒕𝒊𝒏𝒈 𝒅𝒂𝒊𝒍𝒚 𝒍𝒊𝒇𝒆 🔹 𝑬𝒎𝒐𝒕𝒊𝒐𝒏𝒂𝒍 𝒅𝒊𝒔𝒕𝒓𝒆𝒔𝒔 𝒂𝒏𝒅 𝒔𝒆𝒍𝒇-𝒆𝒔𝒕𝒆𝒆𝒎 𝒊𝒔𝒔𝒖𝒆𝒔 🔹 𝑴𝒂𝒚 𝒓𝒆𝒒𝒖𝒊𝒓𝒆 𝒍𝒐𝒏𝒈-𝒕𝒆𝒓𝒎 𝒔𝒕𝒆𝒓𝒐𝒊𝒅 𝒕𝒓𝒆𝒂𝒕𝒎𝒆𝒏𝒕   𝑷𝒓𝒆𝒗𝒆𝒏𝒕𝒊𝒗𝒆 𝑴𝒆𝒂𝒔𝒖𝒓𝒆𝒔: 🔹 𝑼𝒔𝒆 𝒑𝒓𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒅 𝒄𝒓𝒆𝒂𝒎𝒔 𝒕𝒐 𝒓𝒆𝒅𝒖𝒄𝒆 𝒊𝒏𝒇𝒍𝒂𝒎𝒎𝒂𝒕𝒊𝒐𝒏 🔹 𝑨𝒗𝒐𝒊𝒅 𝒉𝒂𝒓𝒔𝒉 𝒔𝒐𝒂𝒑𝒔 𝒂𝒏𝒅 𝒔𝒄𝒆𝒏𝒕𝒆𝒅 𝒑𝒓𝒐𝒅𝒖𝒄𝒕𝒔 🔹 𝑾𝒆𝒂𝒓 𝒃𝒓𝒆𝒂𝒕𝒉𝒂𝒃𝒍𝒆 𝒄𝒐𝒕𝒕𝒐𝒏 𝒖𝒏𝒅𝒆𝒓𝒘𝒆𝒂𝒓 🔹 𝑹𝒆𝒈𝒖𝒍𝒂𝒓 𝒄𝒉𝒆𝒄𝒌-𝒖𝒑𝒔 𝒇𝒐𝒓 𝒆𝒂𝒓𝒍𝒚 𝒅𝒆𝒕𝒆𝒄𝒕𝒊𝒐𝒏`,
    },


  ];

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('/bg/bg3.jpg')` }}
      ></div>

      
      <Navbar/>
      
      <div className="container mx-auto px-4 py-12 mt-8">
        <h2 className="text-5xl font-bold text-center mb-8 ">Women health</h2>
        <div className="flex flex-col gap-8">
          {cardData.map((card, index) => (
            <CardD
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              content={card.content}
              hoverContent={card.hoverContent}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute z-10 w-full">
        <Footer/>
      </div>

    </>
  );
};

export default Diseases;
