package pl.wszib.edu.pl.project.endProject.Model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Results")
public class Results {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @ManyToOne(cascade = {CascadeType.ALL})
    //@ManyToOne
    @JoinColumn(name = "game_id")
    private Games game;
    private Long correctAnswer;
    private Long usersAnswer;

    @CreationTimestamp
    private Date gameDate;


    public Results() {
    }

    public Results(Games game, Long correctAnswer, Long usersAnswer, Date gameDate) {
        this.game = game;
        this.correctAnswer = correctAnswer;
        this.usersAnswer = usersAnswer;
        this.gameDate = gameDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Games getGame() {
        return game;
    }

    public void setGame(Games game) {
        this.game = game;
    }

    public Long getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(Long correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public Long getUsersAnswer() {
        return usersAnswer;
    }

    public void setUsersAnswer(Long usersAnswer) {
        this.usersAnswer = usersAnswer;
    }

    public Date getGameDate() {
        return gameDate;
    }

    public void setGameDate(Date gameDate) {
        this.gameDate = gameDate;
    }
}
