import { useEffect, useState } from "react";

export const UseMenu = () =>{

    let [menu ,  setMenu] = useState([]);
    let [loading ,  setLoading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);
        })
    } , [])
return [menu , loading]

}