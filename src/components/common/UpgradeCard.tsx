import upgradeCard from "../../assets/upgradeCard.svg"


const UpgradeCard: React.FC = () => {
  return (
    <div className="w-[213px] h-fit rounded-xl py-6 px-8 bg-dark dark:bg-darkBackground flex flex-col gap-3">
      <h5 className="text-white  font-semibold text-base text-center">Upgrade to pro for get all features</h5>
      <img src={upgradeCard} alt="upgradeCard" />
      <button className="py-[14px] text-sm font-medium text-dark bg-primary hover:bg-primary/90 rounded-lg capitalize">upgrade now</button>
    </div>
  );
};

export default UpgradeCard;
