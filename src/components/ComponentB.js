import {useAtom} from "jotai";
import {defaultCountry} from "../stores/stores";

const ComponentB = ()=>{
    const [country,setCountry] = useAtom(defaultCountry);
    return (
        <>
        <h1>Component B</h1>
            <div>Country: {country}</div>
            <br/>
            <button onClick={()=>setCountry('Japan')}>
                Set Country To Japan
            </button>
        </>
    )
}
export default ComponentB;