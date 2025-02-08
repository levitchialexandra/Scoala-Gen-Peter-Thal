package repository;

import org.springframework.data.repository.CrudRepository;

import ro.scoalaPeterThalClasses.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

}
