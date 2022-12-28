import React from "react";
import styles from './Body.module.css';
import Perfil from '../../assets/images/perfil.png'
import Insta from '../../assets/images/instagram.png'
import Whats from '../../assets/images/whatsapp.png'
import Linkedin from '../../assets/images/linkedin.png'
import Email from '../../assets/images/email.png'




export default function Body() {
    return(
        <div className={styles.container}>
            <div className={styles.inicio}>
                <h1 className={styles.tituloInicio}>HOME</h1>
                <div className={styles.corpoInicio}>
                    <div className={styles.textoInicio}>
                    <h2 className={styles.introducao}>Front-end<br></br> developer.</h2>
                        <div className={styles.redesSociais}>
                            <img src={Linkedin} alt="linkedin" className={styles.linkedin} />
                            <img src={Email} alt="mail" className={styles.email} />
                            <img src={Whats} alt="zapzap" className={styles.whatsApp} />
                            <img src={Insta} alt="insta" className={styles.insta} />
                        </div>
                    </div>
                    <img src={Perfil} alt="" className={styles.perfil} />
                </div>
            </div>

            <div className={styles.sobre}>
                <h1 className={styles.tituloSobre}>ABOUT ME</h1>
                <div className={styles.corpoPt}>
                    <h2>Portuguese</h2>
                    <p className={styles.textoPt}>
                        <b>Olá,</b> <br></br> 
                        meu nome é Eliel, tenho 19 anos e sou um desenvolvedor junior. <br></br>
                        No momento estou fazendo Psicologia, é, eu sei que não tem relação alguma mas não escolhi amar duas coisas distintas, rs.<br></br>
                        Estou no primeiro ano de psicologia, como bolsista, estou aprendendo a programar nas horas vagas e acredito que a psicologia
                        possa contribuir bastante no meu relacionamento dentro do trabalho!!!<br></br>
                        Tive meu primeiro contato com a programação no colegial, em uma espécie de "técnico" de exatas agregado ao ensino médio, 
                        voltei a ter contato em 2022 e me apaixonei. Hoje estou cursando desenvolvimento web full stack pela Newtab Academy.<br></br>
                        Após terminar a etapa de front end do curso, estou em busca de emprego na área e apesar de não ter experiência trabalhando
                        de maneira remunerada, o curso é imersivo e a gente vive algo muito próximo do trabalho real, realizando metodologias ágeis
                        como o scrum, trabalhos em equipe, projetos que atendem a demanda do mercado, tem prazos de entrega e notas de qualidade.<br></br>
                        Estou muito ansioso pra arrumar o meu primeiro emprego! Não sei tudo, mas quero muito um dia chegar perto de saber!<br></br>
                        Quer contar com alguém com fome de aprendizado? continue rolando para baixo.
                    </p>
                </div>
                <div className={styles.corpoIngles}>
                <h2>English</h2>
                    <p className={styles.textoEng}>
                        <b>Hello,</b> <br></br> 
                        my name is Eliel, I'm 19 years old and I'm a junior developer.<br></br>
                        At the moment I'm doing psychology, yeah, I know it's unrelated, but I didn't choose to love two different things.<br></br> 
                        I am in my first year of psychology, as a scholarship student, I am learning to program in my spare time and I believe that psychology<br></br>
                        can contribute a lot to my relationship at work.<br></br>
                        I had my first contact with programming in high school, in a kind of "technical" high school, and I fell in love with it again in 2022.
                        Today I am studying full stack web development at Newtab Academy.<br></br>
                        After finishing the front end stage of the course, I am looking for a job in the area and although I have no experience working in a paid way, the course 
                        is immersive and we live something very close to the real work, doing agile methodologies like scrum, team work, projects that meet the market demand, 
                        have deadlines and quality grades.<br></br>
                        I am very eager to get my first job! I don't know everything, but I really want to get close to knowing one day.<br></br>
                        Do you want someone with a hunger for learning? keep scrolling down.
                    </p>
                </div>
            </div>

            <div className={styles.projetos}>
                <h1 className={styles.tituloProjetos}>PROJECTS</h1>
                <div className={styles.corpoProjetos}>
                    <img src="" alt="" className={styles.logoJs} />
                    <div className={styles.controleFinanceiro}></div>
                    <div className={styles.cadastroListagem}></div>
                    <img src="" alt="" className={styles.logoReact} />
                    <div className={styles.pagamento}></div>
                    <div className={styles.hashtagFinder}></div>
                </div>
            </div>

            <div className={styles.habilidades}>
                <h1 className={styles.tituloHabilidades}>SKILLS</h1>
                <div className={styles.corpoHabilidades}>
                    <img src="" alt="" className={styles.javaScript} />
                    <img src="" alt="" className={styles.html} />
                    <img src="" alt="" className={styles.css} />
                    <img src="" alt="" className={styles.react} />
                    <img src="" alt="" className={styles.typeScript} />
                    <img src="" alt="" className={styles.equipe} />
                    <img src="" alt="" className={styles.ingles} />
                    <img src="" alt="" className={styles.comunicacao} />
                </div>
            </div>
        </div>
    )
}