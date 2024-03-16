'use client'
import { FC, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import ScrollPanel from '@/components/scroll-panel';

interface Item {
  id: number;
  tags: string[];
  imageSrc: string[];
  title: string;
  link: { text: string, href: string };
  date: string;
  responsibilities: string;
  description: string;
}

const ProjectsPanel: FC<{ items: Item[] }> = ({ items = [] }) => {
  if (!Array.isArray(items)) {
    console.error('Expected items to be an array, but received:', items);
    items = []; // Fallback to an empty array if items is not an array
  }
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // For project's panel
  const [isVisiblePanel, setIsVisiblePanel] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Item | null>(null);
  const [navigationTrigger, setNavigationTrigger] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const onPopState = () => {
      setNavigationTrigger(prev => prev + 1);
    };
    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  useEffect(() => {
    const projectId = searchParams?.get('id');
    if (!projectId) {
      setIsVisiblePanel(false);
      setSelectedProject(null);
    } else {
      const project = items.find(item => item.id.toString() === projectId);
      if (project) {
        setSelectedProject(project);
        setIsVisiblePanel(true);
      }
    }
  }, [searchParams, items, navigationTrigger]);

  const openProjectPanel = (project: Item) => {
    setCurrentImage(0);
    setSelectedProject(project);
    setIsVisiblePanel(true);
    const params = new URLSearchParams(searchParams?.toString())
    params.set('id', `${project.id}`)
    window.history.pushState(null, '', `?${params.toString()}`)
  };

  const closeProjectPanel = () => {
    setIsVisiblePanel(false);
    setSelectedProject(null);
    router.replace('/projects');
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const changeImagePeriod = 3000;
  const timerRef = useRef<number | null>(null);

  const handleNextImage = () => {
    if (selectedProject && selectedProject.imageSrc.length && !isAnimating) {
      setIsAnimating(true);
      setCurrentImage((prevImage) => (prevImage + 1) % selectedProject.imageSrc.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);

      resetTimer();
    }
  };

  const resetTimer = () => {
    if (timerRef.current !== null) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      handleNextImage();
    }, changeImagePeriod);
  };

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, [selectedProject]);

  const projectImageVariants = {
    enter: {
      x: 100,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -100,
      opacity: 0,
    },
  };

  const imageVariants = {
    hover: { filter: 'blur(4px)' },
    rest: { filter: 'blur(0px)' }
  };

  const blurVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 }
  };

  const textVariants = {
    hover: { opacity: 1, y: 0 },
    rest: { opacity: 0, y: -50 }
  };

  const itemVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const closeIconVariants = {
    hover: { rotate: 45, scale: 0.9 },
    rest: { rotate: 0, scale: 1 },
  };

  return (
    <div className="page-content fixed z-5 top-0 right-0 h-full w-1/2 p-6 sm:p-8 md:p-10 lg:p-14">
      <div className="relative h-full overflow-hidden rounded-lg">
        <ScrollPanel>
          <div className="grid grid-cols-2 gap-4 p-2">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center relative cursor-pointer overflow-hidden"
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openProjectPanel(item)}
              >
                <motion.img
                  src={item.imageSrc[0]}
                  alt=""
                  className="w-full h-auto rounded-lg"
                  variants={imageVariants}
                  initial="rest"
                  animate={hoveredId === item.id ? "hover" : "rest"}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute w-full h-full flex items-center justify-center top-0 left-0 pb-10"
                  variants={blurVariants}
                  initial="rest"
                  animate={hoveredId === item.id ? "hover" : "rest"}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    variants={textVariants}
                    initial="rest"
                    animate={hoveredId === item.id ? "hover" : "rest"}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Место для тегов */}
                    <div className="flex flex-wrap justify-center gap-2 p-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-custom-blue text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
                <p className="mt-2 text-center">{item.title}</p>
              </motion.div>
            ))}

          </div>
        </ScrollPanel>
      </div>

      <AnimatePresence initial={false}>
        {isVisiblePanel && selectedProject && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-[2%]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <div className="image-top-right"></div>
            <div className="image-bottom-left"></div>
            <motion.div
              className="panel-close"
              onClick={closeProjectPanel}
              variants={closeIconVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.2 }}
            ></motion.div>
            <motion.div
              className="bg-light-blue w-full h-full overflow-hidden rounded-lg p-[2%]"
              variants={panelVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="relative rounded-lg overflow-hidden w-full min-h-[310px] lg:min-h-[410px] xl:min-h-[510px] " onClick={handleNextImage}>
                    <AnimatePresence>
                      <motion.img
                        key={currentImage}
                        src={selectedProject.imageSrc[currentImage]}
                        variants={projectImageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 100, damping: 15 },
                          opacity: { duration: 1 },
                        }}
                        className="cursor-pointer absolute w-full h-full object-contain rounded-lg"
                        alt=""
                      />
                    </AnimatePresence>
                  </div>

                  {selectedProject.link.text && selectedProject.link.href ? (
                    <div className="flex flex-row px-1">
                      <motion.a
                        key={selectedProject.id}
                        href={selectedProject.link.href}
                        target="_blank"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="w-1/2"
                      >
                        {selectedProject.link.text}-
                      </motion.a>
                      <div className="w-1/2">
                        <p className='text-right font-medium italic'>{selectedProject.date}</p>
                      </div>
                    </div>
                  ) : (
                    <p className='text-right font-medium italic pr-1'>{selectedProject.date}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {selectedProject.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="bg-gray-100 text-custom-blue text-base font-medium mr-2 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div id="project-description" className='pr-8' style={{ overflowY: 'hidden', maxHeight: '80vh' }}>
                  <ScrollPanel>
                    <h1 className="text-3xl font-bold pb-5">{selectedProject.title}</h1>
                    <h2 className="text-2xl font-bold">Job responsibilities</h2>
                    <div dangerouslySetInnerHTML={{ __html: selectedProject.responsibilities }} />
                    <h2 className="text-2xl font-bold pt-2">Description</h2>
                    <div dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
                    {/* Остальной контент панели */}
                  </ScrollPanel>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPanel;