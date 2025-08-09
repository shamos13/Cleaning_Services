import { Home, Building, Sparkles, Truck, Sofa, Bug } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Residential Cleaning',
            description: 'Complete home cleaning services including kitchens, bathrooms, living areas, and bedrooms. Perfect for busy families.',
            icon: Home,
            image: "",
            features: ['Regular weekly/monthly cleaning', 'Kitchen & bathroom deep clean', 'Dusting & vacuuming', 'Window cleaning']
        },
        {
            id: 2,
            title: 'Commercial Cleaning',
            description: 'Professional office and commercial space cleaning to maintain a healthy and productive work environment.',
            icon: Building,
            image: "",
            features: ['Office spaces', 'Restroom sanitization', 'Floor maintenance', 'Trash removal']
        },
        {
            id: 3,
            title: 'Deep Cleaning',
            description: 'Intensive cleaning service that reaches every corner, perfect for move-ins, special occasions, or seasonal cleaning.',
            icon: Sparkles,
            image: null,
            features: ['Detailed appliance cleaning', 'Baseboards & trim', 'Light fixtures', 'Cabinet interiors']
        },
        {
            id: 4,
            title: 'Move-In/Move-Out',
            description: 'Comprehensive cleaning for transitions, ensuring your new home is spotless or helping you get your deposit back.',
            icon: Truck,
            image: null,
            features: ['Complete property cleaning', 'Appliance cleaning', 'Cabinet cleaning', 'Floor deep clean']
        },
        {
            id: 5,
            title: 'Carpet & Upholstery',
            description: 'Professional carpet and furniture cleaning using advanced equipment and eco-friendly cleaning solutions.',
            icon: Sofa,
            image: null,
            features: ['Steam cleaning', 'Stain removal', 'Odor elimination', 'Fabric protection']
        },
        {
            id: 6,
            title: 'Fumigation & Pest Control',
            description: 'Complete pest control solutions to keep your property safe and pest-free with environmentally conscious methods.',
            icon: Bug,
            image: null,
            features: ['Comprehensive inspection', 'Safe treatment methods', 'Prevention strategies', 'Follow-up service']
        }
    ]
}

export default Services;