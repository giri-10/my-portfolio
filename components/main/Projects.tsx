'use client';
import React, { memo, useMemo } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '@/data/Projects';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className="flex flex-col items-center justify-center py-20 space-y-8"
      id="projects"
      aria-labelledby="projects-section-header"
    >
      <SectionHeader
        title="My Work Portfolio"
        subtitle="Showcasing My Projects"
        Icon={<GlobeAltIcon />}
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12"
      >
        {projectsData.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            src={project.src}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            sourceUrl={project.sourceUrl}
            youtubeUrl={project.youtubeUrl}
            startDate={project.startDate}
            endDate={project.endDate}
            technologyStack={project.technologyStack}
            features={project.features}
            challenges={project.challenges}
            accomplishments={project.accomplishments}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);
