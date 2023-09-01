import MpLogo from "./Mplogo.png"; // Ajusta la ruta según la ubicación real de tu imagen

export default function MpButton() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        id="mercadoPagoButton"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 inline-flex items-center space-x-2"
      >
        <img src={MpLogo} alt="Mercado Pago Icon" className="w-8 h-8" />
        <span>Pagar </span>
      </button>
    </div>
  );
}
