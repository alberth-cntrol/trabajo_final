import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/funciona.jpg'})`,


    //backgroundColor: '#23394d',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));
export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };
  const classes = useStyles();


  return (
    <div>
      {error && <Alert message={error} />}

      <section className="vh-100">
        <div className="container py-5 h-100">
          {/* parte de imagen */}
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image"></img>
            </div>
            {/* parte de formulario */}
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h3>Digital locked</h3>
              <hr></hr>
              <form onSubmit={handleSubmit}>
                {/* Inicio de correo */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="email"
                    className="form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="correo@gmail.com"
                  />
                </div>
                {/* Fin de correo */}

                {/* Inicio de password */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="*********"
                  />
                </div>
                {/* Fin de password */}

                {/* Inicio de botones */}
                <div className="flex items-center justify-between">
                  <button
                    className="btn btn-primary d-grid gap-2 col-6 mx-auto btn-lg "
                    type="submit"
                  >
                    Iniciar Sesion
                  </button>
                </div>
                <br></br>
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleGoogleSignin}
                    className="btn btn-danger d-grid gap-2 col-6 mx-auto btn-lg"
                  >
                    Google login
                  </button>
                </div>
                <br></br>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#!"
                  onClick={handleResetPassword}
                >
                  ¿Olvidaste tu contraseña?
                </a>

                <p className="my-4 text -sm flex ">
                  ¿No tienes cuenta?.
                  <Link to="/register" className="text-blue-700 hover:text-blue-900">
                    Registrarse
                  </Link>
                </p>
              </form>
            </div>

          </div>

        </div>

      </section>

    </div>

  );
}
