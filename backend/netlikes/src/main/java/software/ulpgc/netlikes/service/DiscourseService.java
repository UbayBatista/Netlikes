package software.ulpgc.netlikes.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class DiscourseService {

    // Inyectamos las variables que configuraste en el application.properties
    @Value("${discourse.api.url}")
    private String discourseUrl;

    @Value("${discourse.api.key}")
    private String apiKey;

    @Value("${discourse.api.username}")
    private String apiUsername;

    /**
     * Crea un nuevo tema (foro) en Discourse para una película.
     * @param filmTitle El título de la película.
     * @return El ID del tema creado en Discourse (o null si falla).
     */
    public Integer createMovieForum(String filmTitle) {
        RestTemplate restTemplate = new RestTemplate();
        String endpoint = discourseUrl + "/posts.json";

        // 1. Configuramos las cabeceras de seguridad con tu API Key
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Api-Key", apiKey);
        headers.set("Api-Username", apiUsername);
            
        // 2. Preparamos los datos del foro
        Map<String, Object> body = new HashMap<>();
        
        // Discourse requiere que el título tenga al menos 15 caracteres por defecto
        body.put("title", "Foro oficial: " + filmTitle); 
        
        // Discourse requiere un primer mensaje ("raw") de al menos 20 caracteres para crear el tema
        body.put("raw", "Bienvenidos al foro oficial de la película " + filmTitle + ". ¡Podéis comentar vuestras opiniones y usar la etiqueta de spoilers si es necesario!");
        
        body.put("category", 5);
        // Nota: Opcionalmente se podría enviar un "category_id" si hubieras creado una categoría específica para películas en Discourse. Por ahora irá a la categoría por defecto.

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        try {
            // 3. Enviamos la petición POST a la API de Discourse
            ResponseEntity<Map> response = restTemplate.postForEntity(endpoint, request, Map.class);
            
            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                // Discourse nos devuelve mucha información, pero nos interesa el 'topic_id'
                return (Integer) response.getBody().get("topic_id");
            }
        } catch (Exception e) {
            System.err.println("Error al comunicar con la API de Discourse: " + e.getMessage());
        }
        
        return null;
    }
}
