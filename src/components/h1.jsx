"use client"
import { motion } from "framer-motion"

const Heading = ({ text }) => {
  text = text.split(" ")
  return (
    <div className="text-ani" style={{ display: "flex", gap: "10px" }}>
      {text.map((el, i) => (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.h1>
      ))}
    </div>
  )
}

export default Heading
