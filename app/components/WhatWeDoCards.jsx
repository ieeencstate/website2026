import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import HardwareEmbeddedDemo from "./HardwareEmbeddedDemo";
import CareerOpportunitiesDemo from "./CareerOpportunitiesDemo";
import CompetitionsDemo from "./CompetitionsDemo";
import { cardContent } from "../lib/resources";

const AccordionSolutions = () => {
  const [open, setOpen] = useState(cardContent[0].id);
  const selectedSolution = cardContent.find((s) => s.id === open);
  
  const renderDemo = () => {
    switch (selectedSolution?.id) {
      case 1:
        return <HardwareEmbeddedDemo />;
      case 2:
        return <CareerOpportunitiesDemo />;
      case 3:
        return <CompetitionsDemo />;
      default:
        return <HardwareEmbeddedDemo />;
    }
  };

  return (
    <section className="px-8 py-12">
      <div className="w-full mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]" style={{ maxWidth: '1200px' }}>
        <div>
          <div className="flex flex-col gap-4">
            {cardContent.map((q) => {
              return (
                <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
              );
            })}
          </div>
          </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={selectedSolution?.id}
            className="rounded-2xl aspect-[4/3] lg:aspect-auto"
            style={{
              minHeight: '300px',
            }}
          >
            {renderDemo()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({ title, description, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="rounded-lg relative overflow-hidden cursor-pointer"
      style={{
        border: '2px solid white',
        backgroundColor: '#1a1a1a'
      }}
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="p-6 rounded-[7px] flex flex-col justify-between relative z-20"
    style={{ 
          fontFamily: 'IBM Plex Mono',
          backgroundColor: '#1a1a1a'
        }}
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)",
            }}
            className="text-xl font-medium w-fit"
            style={{
              fontFamily: 'IBM Plex Mono',
              color: '#ffffff'
            }}
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4"
            style={{
              fontFamily: 'IBM Plex Mono',
              color: '#ffffff'
            }}
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] text-white"
          style={{
            fontFamily: 'IBM Plex Mono',
            backgroundColor: '#ffffff',
            color: '#000000'
          }}
        >
          <span>Learn more</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: '#1a1a1a'
        }}
      />
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#1a1a1a' }} />
    </div>
  );
};

export default AccordionSolutions;