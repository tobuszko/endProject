package pl.wszib.edu.pl.project.endProject.Model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Scores")
public class Scores {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String gameId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
    private Boolean answer;
    private Date gameDate;


    public Scores() {
    }

    public Scores(String gameId, User user, Boolean answer, Date gameDate) {
        this.gameId = gameId;
        this.user = user;
        this.answer = answer;
        this.gameDate = gameDate;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGameId() {
        return gameId;
    }

    public void setGameId(String gameId) {
        this.gameId = gameId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Boolean getAnswer() {
        return answer;
    }

    public void setAnswer(Boolean answer) {
        this.answer = answer;
    }

    public Date getGameDate() {
        return gameDate;
    }

    public void setGameDate(Date gameDate) {
        this.gameDate = gameDate;
    }
}
