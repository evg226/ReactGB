import "./style.scss";
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core/';
import { Link } from "react-router-dom";
    
function Home() {
    return (
        <div className="container">
            <Typography variant="h4" className="page-header" gutterBottom>Добро пожаловать в Мессенджер</Typography>
            <div className="main-page__box">
                <Link to="/profile" className="main-page__item">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                                Перейти
                            </Typography>
                            <Typography variant="h5" component="h2">Профиль пользователя</Typography>
                            <Typography color="textSecondary">Вход, регистрация</Typography>
                            <Typography variant="body2" component="p"> Войдите в систему<br />Нет учетной записи - зарегистрируйтесь
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Войти сейчас</Button>
                        </CardActions>
                    </Card>
                </Link>
                <Link to="/chats" className="main-page__item">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                                Перейти к чатам
                            </Typography>
                            <Typography variant="h5" component="h2">Список чатов</Typography>
                            <Typography color="textSecondary">Чатрум</Typography>
                            <Typography variant="body2" component="p"> Начните отправлять сообщения<br />Нет учетной записи - зарегистрируйтесь
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Перейти к чатам</Button>
                        </CardActions>
                    </Card>
                </Link>
                <Link to="/api" className="main-page__item">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                                Перейти
                            </Typography>
                            <Typography variant="h5" component="h2">Внешний API</Typography>
                            <Typography color="textSecondary">Переход к внешнему API</Typography>
                            <Typography variant="body2" component="p"> Посмотрите внешний API<br />Нет учетной записи - зарегистрируйтесь
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Войти сейчас</Button>
                        </CardActions>
                    </Card>
                </Link>
            </div>
        </div>
    )
}

export default Home;