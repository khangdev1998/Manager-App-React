import { Alert, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const Maintenance = ({ namePage }) => {
  return (
    <Alert variant="info">
      <h4 className="fw-bold fs-5">
        <i className="bi bi-exclamation-square fs-5 me-1"></i> Trang {namePage}{" "}
        chưa hoàn thiện
      </h4>
      <div className="d-flex align-items-center gap-3 mt-1">
        Trang này đang trong quá trình phát triển chưa xong. Vui lòng quay lại
        sau! <Spinner animation="grow" variant="info" />
      </div>
      <p className="lh-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius,
        cumque nostrum nemo vel atque, optio voluptate, debitis iure rem
        reiciendis nobis quas temporibus deleniti laborum corporis dicta dolore
        autem? Illo fugiat assumenda ipsa vero quia quam rem earum voluptates!
        Cumque reprehenderit voluptate temporibus consequatur inventore, quo
        veritatis architecto, nostrum cupiditate, doloribus adipisci et facilis
        ullam optio? Totam, odit blanditiis? Quod dolorum tempore illum nemo
        labore voluptatibus qui molestiae asperiores est sunt, atque quae? Ea,
        molestias dolor qui itaque quisquam maiores tempora mollitia, ad iusto
        excepturi, officia quas quae cupiditate. Omnis, hic! Saepe obcaecati
        enim sed rem vitae non cumque voluptatem culpa optio, maiores
        exercitationem neque consectetur, tenetur quia! Alias recusandae
        expedita reiciendis quis magni fuga hic veritatis suscipit at.
      </p>
    </Alert>
  );
};

Maintenance.propTypes = {
  namePage: PropTypes.string.isRequired,
};

export default Maintenance;