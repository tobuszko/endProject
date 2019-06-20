package pl.wszib.edu.pl.project.endProject.Model;

import javax.persistence.*;

@Entity
@Table(name="Games")
public class Games {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String gameName;

    public Games() {
    }

    public Games(String gameName) {
        this.gameName = gameName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }
}
