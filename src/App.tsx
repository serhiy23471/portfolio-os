import { Desktop } from './components/Desktop/Desktop';
import { MyrMyrCaseStudy } from './components/CaseStudies/MyrMyrCaseStudy';
import { PortfolioOsCaseStudy } from './components/CaseStudies/PortfolioOsCaseStudy';
import { MobilePortfolio } from './components/Mobile/MobilePortfolio';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const pathname = window.location.pathname;

  if (pathname === '/case-studies/myr-myr-project') return <MyrMyrCaseStudy />;
  if (pathname === '/case-studies/portfolio-os') return <PortfolioOsCaseStudy />;

  return isMobile ? <MobilePortfolio /> : <Desktop />;
}
