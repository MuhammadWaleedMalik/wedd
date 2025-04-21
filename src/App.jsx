import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from  './pages/NotFound';
import Privacy from   './pages/Privacy';
import Terms from     './pages/Terms';
import Aboutus from   './pages/Aboutus';



import PricingBasic from './pages/PricingBasic';
import PricingEnterprice from './pages/PricingEnterprice';
import PricingPro from './pages/PricingPro';




import ProtectedRoute from './components/ProtectedRoute';

import Blogs from './pages/BLogs';
import FAQs from './components/FAQs';
import WeddingAIFeatures from './pages/AIFeatures';
import InvitationGenerator from './pages/features/InvitationGenerator';
import WeddingTextGenerator from './pages/features/WeddingTextGenerator';
import WeddingVowsGenerator from './pages/features/WeddingVowsGenerator';
import FlowerArrangementGenerator from './pages/features/FlowerArrangementGenerator';
import BudgetPlanner from './pages/features/BudgetPlanner';
import Dashboard from './pages/DashboardC'












function App() {
  return (  
    <Routes>
      <Route path="/admin/*" element={<Dashboard />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="services" element={<WeddingAIFeatures />} />



        
        
          
          
          
     
          

          

        
        
                
        
          <Route path="pricing" element={<Pricing />} />
           
        <Route element={<ProtectedRoute />}>
        <Route path="pricing/basic" element={<PricingBasic />} />
                            <Route path="pricing/enterprise" element={<PricingEnterprice />} />
                            <Route path="pricing/pro" element={<PricingPro />} />
        
          <Route path="ai-invitations" element={<InvitationGenerator />} />
          <Route path="ai-invitation-text" element={<WeddingTextGenerator />} />
          <Route path="ai-vows" element={<WeddingVowsGenerator />} />
          <Route path="ai-flowers" element={<FlowerArrangementGenerator />} />
          <Route path="ai-budget" element={<BudgetPlanner />} />
          
        </Route>
        
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="aboutus" element={<Aboutus/>} />
        
        
        <Route path="*" element={<NotFound />} />
      
      
      


      </Route>
    </Routes>
  );
}

export default App;