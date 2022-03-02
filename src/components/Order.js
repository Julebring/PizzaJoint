import React from 'react';
import {motion} from 'framer-motion';


const containerVariants={
  hidden: {     
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', 
      mass: 0.4,  /* gäller bara för spring. 'Massan' blir lättare och då går mtion fortare */
      damping: 8, /* gäller bara för spring */
      when: "beforeChildren",  /* visa barnets (p och div (moion)) först när parents motion har gjorts klart */
      staggerChildren: 0.4  /* när första barnets motion börjar, vänta 0.4 till nästa barnets motion börjar */
    }
  }
}

const childVariants={  /*  dessa ärver även från ovan, och hidden/visibile heter samma på båda ställen
  då läggs dessa två opacity till dem från parent */
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;