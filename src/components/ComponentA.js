import {useAtom} from 'jotai';
import {initialCount} from "../stores/stores";

const ComponentA = () => {
    const [count, setCount] = useAtom(initialCount)
    return (
        <>
            <h1>Component A</h1>
            <div>Count {count}</div>
            <br/>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    )
}
export default ComponentA;