import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="/plane-png1.png" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        {state.isLoading
          ? "Uçuşlar Aranıyor..."
          : !state.isError
          ? `${state.flights.length} Uçuş Bulundu`
          : "Sorun Oluştu"}
      </p>
    </header>
  );
};

export default Header;
