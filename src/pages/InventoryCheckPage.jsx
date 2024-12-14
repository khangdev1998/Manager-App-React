import Table from "../components/Table/Table";
import Tool from "../components/Tool/Tool";
import ListTab from "../components/ListTab/ListTab";

const InventoryCheckPage = () => {
  return (
    <>
      <Tool />
      <ListTab />
      <Table useRounded={false} />
    </>
  );
};

export default InventoryCheckPage;
