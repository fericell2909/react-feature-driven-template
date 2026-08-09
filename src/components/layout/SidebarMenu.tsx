import { useAuth } from '@/app/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

interface SidebarMenuProps {
  onItemClick?: () => void;
}

export const SidebarMenu = ({ onItemClick }: SidebarMenuProps) => {

    const {logout} = useAuth()

    const navigate = useNavigate();

    const onClickLogout = (e: React.MouseEvent) => {
        e.preventDefault(); 
        
        logout();
        navigate('/',{replace: true})
    };

  return (
    <div className="flex flex-col h-full">
      <nav className="space-y-1 flex-1">
        <Link 
          to="/dashboard" 
          onClick={onItemClick}
          className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
        >
          Dashboard
        </Link>
        <Link 
          to="/dashboard/profile" 
          onClick={onItemClick}
          className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
        >
          Users
        </Link>
        <button 
          type="button"
          onClick={(e) => onClickLogout(e)}
          className="w-full text-left block px-3 py-2 rounded-lg text-red-600 font-medium hover:bg-red-50 transition-colors cursor-pointer"
        >
          Cerrar Sesión
        </button>
      </nav>
    </div>
  );
};

export default SidebarMenu;