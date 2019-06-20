package pl.wszib.edu.pl.project.endProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.wszib.edu.pl.project.endProject.DAO.GamesDAO;
import pl.wszib.edu.pl.project.endProject.DAO.ResultsDAO;
import pl.wszib.edu.pl.project.endProject.Model.Results;


import java.util.ArrayList;
import java.util.List;

@Service
public class GameService {

    @Autowired
    GamesDAO gamesDAO;

    @Autowired
    ResultsDAO resultsDAO;




    public List<Results> getAllResults(){
        List<Results> resultsList = new ArrayList<>();
        resultsDAO.findAll().forEach(result -> resultsList.add(result));
        return resultsList;
    }


    public void saveOneResult (Results results){
        resultsDAO.save(results);
    }




}
