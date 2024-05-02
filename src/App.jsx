import Gradient from "./components/Gradient";
import { useSelector } from "react-redux";
import ColorInputs from "./components/inputs/ColorInputs";
import AddRemoveColor from "./components/AddRemoveColor";
import RangeAngle from "./components/inputs/RangeAngle";
import SelectColor from "./components/inputs/SelectColor";
import RangeColorPosition from "./components/inputs/RangeColorPosition";
import OpenModalBtn from "./components/modal/OpenModalBtn";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const gradientValues = useSelector((state) => state.gradient);

    return (
        <div>
            <Header />
            <div className="relative flex text-slate-100 max-w-4xl mx-auto mt-20 p-4 border border-slate-400">
                <div className="w-1/2 p-4 pr-8">
                    <h1 className="text-center text-xl mb-1 italic">
                        Bring style to your apps
                    </h1>
                    <p className="text-center italic text-sm mb-6">
                        Create a color gradient and copy your code
                    </p>
                    <p className="mb-1">Colors (min 2, max 5)</p>

                    <div className="flex mb-2">
                        {gradientValues.colors.map((obj) => (
                            <ColorInputs
                                id={obj.id}
                                color={obj.value}
                                key={obj.id}
                            />
                        ))}
                    </div>

                    <div className="mb-5">
                        <AddRemoveColor action={"remove"} text={"-"} />
                        <AddRemoveColor action={"add"} text={"+"} />
                    </div>

                    <p>Pick and change a color's position</p>
                    <SelectColor />

                    <p>Color position</p>
                    <RangeColorPosition />

                    <p>Gradient global angle</p>
                    <RangeAngle />

                    <OpenModalBtn />
                </div>
                <Gradient />

            </div>
            <Footer />
            
        </div>
    );
}

export default App;
