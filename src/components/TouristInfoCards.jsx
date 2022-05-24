import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="tourist-cards d-flex justify-content-between container">
      <div className="card">
        <img
          src="https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://a.cdn-hotels.com/gdcs/production134/d1969/748a572f-8f66-4cef-81b2-1cb3780b1714.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>London</h1>
          <a
            href="https://www.visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
