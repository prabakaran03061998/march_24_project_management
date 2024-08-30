import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <Paper elevation={2} sx={{ width: 100, height: 100, padding: 10 }}>
                Login
                <Link to={'/register'}>Open Register</Link>
            </Paper>


        </>
    )

}

export default LoginPage;