import LogoAnimation from '~/components/OpeningAnimation/LogoAnimation';
import Glasses3d from '~/components/OpeningAnimation/Glasses3d';
import LinksAnimation from '~/components/OpeningAnimation/LinksAnimation';

const Entrance = () => {

  return (
    <div className=''>

      <div className="relative z-10">
          <LogoAnimation />
      </div>

      <div className="absolute top-0 left-0 w-full z-20">
        <LinksAnimation />
      </div>        



    </div>
  )
};

export default Entrance;


      
      {/* 
        apparition logo sur fond noir
        ecran noir qui s'ouvre par le centre veritcalement avec de la texture sur les bords qui s'ouvrent
        logo s'est déplacer pendant l'ouverture vers le haut 
        derriere l'ecran noir une paire de lunettes de soleil en 3d :        
        reduire taille logo et enlever couleur de fond glasses
        joliement eclairée
        animation scale de tres gros a gros
        deplacement du logo vers la gauche

        apparition de liens rapides sur le footer
        
        reprendre : 
        faire un scroll qui fait tourner les lunettes et affiche un gros text au dessus avec un soustitre
        faire idem une seconde fois avec autre text et autre rotation des lunettes
        puis un scroll de plus tourne les lunettes vers soi pour les mettre
        le scroll suivant fait rentrer dans l'univers 
      */}