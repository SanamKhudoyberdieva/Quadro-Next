export function getName(item, lang = "ru") {
    if (!item) return "";
    if (lang == "ru") return item.name;
    return item["name_" + lang] || item.name;
}

export function getImage(item, lang = "ru") {
    if (!item) return "";
    if (lang == "ru") return item.image;
    return item["image_" + lang] || item.image;
}

export function getDescription(item, lang = "ru") {
    if (!item) return "";
    if (lang == "ru")
      return item.description
        ? item.description.replace(/(?:\\r\\n|\\r|\\n)/g, "<br />")
        : "";
    return (item["description_" + lang] || item.description).replace(
      /(?:\\r\\n|\\r|\\n)/g,
      "<br/>",
    );
}

export const convertToPrice = (number) =>
  (number + "").split(/(?!^)(?=(?:\d{3})+(?:\.|$))/).join(" ");

export const getPrice = (item, isHumanReadable = true) => {
  if (!item) return;
  let price = item.price;
  if ((item.old_price || 0) > 0) price = item.old_price;
  if (!isHumanReadable) {
    return price;
  }
  return convertToPrice(parseInt(price, 10));
};