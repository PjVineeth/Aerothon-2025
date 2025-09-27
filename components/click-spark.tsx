    "use client"

    import { useEffect, useState } from "react"
    import { motion, AnimatePresence } from "framer-motion"

    interface Spark {
    id: number
    x: number
    y: number
    }

    export function ClickSpark() {
    const [sparks, setSparks] = useState<Spark[]>([])

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
        const newSpark = {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
        }
        setSparks((prev) => [...prev, newSpark])

        setTimeout(() => {
            setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id))
        }, 1000)
        }

        document.addEventListener("click", handleClick)
        return () => document.removeEventListener("click", handleClick)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
        <AnimatePresence>
            {sparks.map((spark) => (
            <motion.div
                key={spark.id}
                className="absolute w-2 h-2 bg-orange-600 rounded-full"
                style={{
                left: spark.x - 4,
                top: spark.y - 4,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 1, 0], opacity: [1, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-500 rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                    x: Math.cos((i * Math.PI) / 3) * 20,
                    y: Math.sin((i * Math.PI) / 3) * 20,
                    opacity: 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                ))}
            </motion.div>
            ))}
        </AnimatePresence>
        </div>
    )
    }
