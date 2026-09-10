import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "@/data/navigation";

function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="lg:hidden">
      {/* Menu Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="
          flex h-10 w-10 items-center justify-center
          rounded-full
          border border-white/10
          bg-white/[0.04]
          text-white
          transition-all duration-300
          hover:border-portfolio-green/40
          hover:bg-portfolio-green/10
          hover:text-portfolio-green
        "
      >
        <Menu className="h-[19px] w-[19px]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100]"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Dark Overlay */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-[2px]"
              variants={{
                closed: {
                  opacity: 0,
                },

                open: {
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
            />

            {/* Drawer */}
            <motion.aside
              variants={{
                closed: {
                  x: "100%",
                },

                open: {
                  x: 0,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 36,
                mass: 0.8,
              }}
              className="
                absolute right-0 top-0
                flex h-dvh
                w-[76vw]
                max-w-[300px]
                flex-col
                border-l border-white/[0.08]
                bg-[#060806]/98
                px-5 py-5
                shadow-[-20px_0_70px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <a
                  href="#home"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-base font-semibold text-portfolio-green"
                >
                  <span className="font-bold">&lt;/&gt;</span>

                  <span>Mohamed</span>
                </a>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    text-white
                    transition-all duration-300
                    hover:border-portfolio-green/30
                    hover:text-portfolio-green
                  "
                >
                  <X className="h-[17px] w-[17px]" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                className="mt-7 flex flex-col gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},

                  visible: {
                    transition: {
                      staggerChildren: 0.055,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {navigation.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 18,
                      },

                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="
                      rounded-xl
                      px-3.5 py-3
                      text-sm font-medium
                      text-portfolio-muted
                      transition-all duration-300
                      hover:bg-white/[0.04]
                      hover:pl-4
                      hover:text-portfolio-green
                    "
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>

              {/* CTA */}
              <motion.div
                className="mt-6 border-t border-white/[0.08] pt-5"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.28,
                  duration: 0.3,
                }}
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="
      flex h-11 w-full
      items-center justify-center
      rounded-full
      bg-white
      text-sm font-semibold
      text-black
      transition-all duration-300
      hover:bg-portfolio-green
    "
                >
                  Hire Me
                </a>

                <p className="mt-3 text-center text-[10px] text-portfolio-subtle">
                  Available for remote opportunities
                </p>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
