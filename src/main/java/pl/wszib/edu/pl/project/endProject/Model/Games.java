package pl.wszib.edu.pl.project.endProject.Model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name="Games")
public class Games {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="game_id")
    private Integer id;

    private String gameName;

    @OneToMany(mappedBy="game", fetch=FetchType.LAZY, cascade = CascadeType.ALL)
   // @OneToMany
    //@JoinColumn(name="game_id", referencedColumnName = "result_id")
    private List<Results> results;



    public Games() {
    }

    public Games(String gameName) {
        this.gameName = gameName;
    }
/*
    public Games(@NotNull(message = "Game name cannot by null") String gameName, List<Results> results) {
        this.gameName = gameName;
        this.results = results;
    }*/

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

/*    public List<Results> getResults() {
        return results;
    }

    public void setResults(List<Results> results) {
        this.results = results;
    }*/
}
