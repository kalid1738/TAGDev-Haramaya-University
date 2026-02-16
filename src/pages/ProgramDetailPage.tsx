import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProgramDetail from '../components/Programs/ProgramDetail';
import { programAreas } from '../data/programData';

const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programAreas.find(p => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <Layout>
      <ProgramDetail program={program} />
    </Layout>
  );
};

export default ProgramDetailPage;