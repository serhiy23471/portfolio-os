import { Desktop } from './components/Desktop/Desktop';
import { MyrMyrCaseStudy } from './components/CaseStudies/MyrMyrCaseStudy';
import { NiceGadgetsCaseStudy } from './components/CaseStudies/NiceGadgetsCaseStudy';
import { PortfolioOsCaseStudy } from './components/CaseStudies/PortfolioOsCaseStudy';
import { UiKitCaseStudy } from './components/CaseStudies/UiKitCaseStudy';
import { UiKitDemo } from './components/Demos/UiKitDemo';
import { MobilePortfolio } from './components/Mobile/MobilePortfolio';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const pathname = window.location.pathname;

  if (pathname === '/case-studies/myr-myr-project') return <MyrMyrCaseStudy />;
  if (pathname === '/case-studies/nice-gadgets') return <NiceGadgetsCaseStudy />;
  if (pathname === '/case-studies/portfolio-os') return <PortfolioOsCaseStudy />;
  if (pathname === '/case-studies/ui-kit') return <UiKitCaseStudy />;
  if (pathname === '/demos/ui-kit') return <UiKitDemo />;

  return isMobile ? <MobilePortfolio /> : <Desktop />;
}
