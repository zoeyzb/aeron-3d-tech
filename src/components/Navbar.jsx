import React from 'react';
const sections = [['Overview','hero'],['Explore','product-viewer'],['Design','showcase'],['Performance','performance'],['Features','features'],['Highlights','highlights']];
const Navbar = () => <header><nav><a href="#hero" className="font-bold text-xl" aria-label="Aeron home">AERON</a><ul>{sections.map(([label,id])=><li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul><div className="flex-center gap-3"><a href="#product-viewer" className="font-bold" aria-label="Explore Aeron laptop in 3D">EXPLORE IN 3D ↗</a></div></nav></header>;
export default Navbar;
