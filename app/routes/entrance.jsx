import EntranceAnimation from '~/components/OpeningAnimation/EntranceAnimation';
import Basic3dObject from '~/components/TestAnimation/Basic3dObject';

const Entrance = () => {

  return (
    <div className='bg-amber-400'>
      
      {/* 
        apparition logo sur fond noir
        ecran noir qui s'ouvre par le centre veritcalement avec de la texture sur les bords qui s'ouvrent
        logo s'est déplacer pendant l'ouverture vers le haut 
        derriere l'ecran noir une paire de lunettes de soleil en 3d joliement eclairée
        animation scale de tres gros a gros
        deplacement du logo vers la gauche
        apparition de liens rapides sur le footer

        faire un scroll qui fait tourner les lunettes et affiche un fros text au dessus avec un soustitre
        faire idem une seconde fois avec autre text et autre rotation des lunettes
        puis un scroll de plus tourne les lunettes vers soi pour les mettre
        le scroll suivant fait rentrer dans l'univers 
        


      */}
      <EntranceAnimation /> 

    </div>
  )
};

export default Entrance;
