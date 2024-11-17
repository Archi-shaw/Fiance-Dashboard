import { motion } from "framer-motion";
interface hamProps{
    isOpen:boolean;
    toggleMenu: () => void;
}

const hambutton:React.FC<hamProps> = ({
 isOpen,
 toggleMenu,
}) => {
  
    const lineVarients = {
        openTop:{rotate:45,y:5},
        closed:{rotate:0,y:0},
        openBottom:{rotae:-45,y:-5},
        hide:{w:0},
    };
    return(
        <button 
        onClick={toggleMenu}
        className="focus:outline-none flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <motion.div
            className="bg-white w-6 h-[1px] mb-1"
            varients={lineVarients}
            animate={isOpen? "openTop": closed }
            transition={{ duration:0.3 }} />
            <motion.div
            className="bg-white w-6 h-[1px] mb-1"
            varients={lineVarients}
            animate={isOpen? "hide": closed }
            transition={{ duration:0.3 }}></motion.div>
             <motion.div
            className="bg-white w-6 h-[1px] mb-1"
            varients={lineVarients}
            animate={isOpen? "openBottom": closed }
            transition={{ duration:0.3 }}></motion.div>
      </div>
       </button>
    )
}

export default hambutton;