import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
}

export const postJoin = (req,res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        //사용자의 비밀번호가 잘못되었을 때, 400으로 상태코드 등록 후 join화면 render하기
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    }
    else{
        //To Do : Register User
        //To Do : Log user in
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => {
    res.render("login", {pageTitle : "Log In"});
}
export const postLogin = (req, res) => {
    //사용자 비밀번호가 데이터베이스에 있는 것과 같은지 검사 필요
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    //To Do : Process Log Out
    res.redirect(routes.home);
}

export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");