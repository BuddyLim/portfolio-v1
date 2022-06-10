export const handleLinkClick = (url, breakpoint) =>{
  if(["tablet", "mobile"].includes(breakpoint)){
    window.location.assign(url);
    return
  }

  window.open(url, '_blank').focus();
}
