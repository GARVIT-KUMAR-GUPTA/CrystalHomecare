import { Heart } from "lucide-react";
import logo from "../../assets/logo.jpg"; 
export function Logo() {
  return (
    <div className="flex items-center gap-2">
      
          <img src={logo} alt="CrystalCare Logo" className="h-12 w-auto" />
         
       
      {/* <Heart className="h-6 w-6 text-primary" /> */}
      <span className="text-2xl font-bold text-primary">Crystal Home Care</span>
    </div>
  );
}
