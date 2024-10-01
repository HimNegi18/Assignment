import hisense from "../../assets/case-studies/case-images/casestudy-hisense.webp";
import suzuki from "../../assets/case-studies/case-images/suzuki-banner.webp";
import niva from "../../assets/case-studies/case-images/niva-bupa-banner.webp";
import hisenselogo from '../../assets/case-studies/case-logos/hisense.svg';
import suzukilogo from '../../assets/case-studies/case-logos/suzuki.svg';
import nivalogo from '../../assets/case-studies/case-logos/niva.svg';

export const caseStudies = [
    {
        id: 0,
        heading: "Revamped eCommerce Website With Auto-scalable server support",
        brandImg: hisense, 
        brandlogo: hisenselogo,
        content: "Boosted traffic by 30% through Amazon EC2 auto-scaling to match demand and optimized site performance for responsiveness across all screens."
    },
    {
        id: 1,
        heading: "Managed IT Support and Services for a Global Mobility Manufacturer",
        brandImg: suzuki,
        brandlogo: suzukilogo,
        content: "Created a value-induced website with POSM updates, AWS server management, vehicle lead, and stock management, and a recalling function."
    },
    {
        id: 2,
        heading: "Insurance On-boarding and Training Platform With Online Assessment",
        brandImg: niva,
        brandlogo: nivalogo,
        content: "Designed a personalized induction platform with intuitive UI/UX, online assessment, and real-time feedback for effective skill development."
    }
]