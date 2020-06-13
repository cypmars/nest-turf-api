--
-- PostgreSQL database dump
--

-- Dumped from database version 10.13
-- Dumped by pg_dump version 10.13

-- Started on 2020-06-13 12:17:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2862 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 205 (class 1259 OID 25204)
-- Name: course; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course (
    id integer NOT NULL,
    heure_depart date NOT NULL,
    libelle character varying(1000) NOT NULL,
    date_insert_db date,
    num_reunion integer,
    date_reunion date
);


ALTER TABLE public.course OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 25202)
-- Name: course_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_id_seq OWNER TO postgres;

--
-- TOC entry 2863 (class 0 OID 0)
-- Dependencies: 204
-- Name: course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_id_seq OWNED BY public.course.id;


--
-- TOC entry 197 (class 1259 OID 25139)
-- Name: hippodrome; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hippodrome (
    code character varying(20) NOT NULL,
    libelle_court character varying(100),
    libelle_long character varying(500),
    id integer NOT NULL
);


ALTER TABLE public.hippodrome OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 25219)
-- Name: hippodrome_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hippodrome_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hippodrome_id_seq OWNER TO postgres;

--
-- TOC entry 2864 (class 0 OID 0)
-- Dependencies: 206
-- Name: hippodrome_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hippodrome_id_seq OWNED BY public.hippodrome.id;


--
-- TOC entry 200 (class 1259 OID 25157)
-- Name: meteo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meteo (
    id integer NOT NULL,
    date_prevision date,
    temperature integer,
    force_vent integer,
    direction_vent character varying(5),
    nebulosite_code character varying(5),
    date_reunion date NOT NULL,
    num_reunion integer NOT NULL,
    reunion_id integer
);


ALTER TABLE public.meteo OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 25155)
-- Name: meteo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meteo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.meteo_id_seq OWNER TO postgres;

--
-- TOC entry 2865 (class 0 OID 0)
-- Dependencies: 199
-- Name: meteo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meteo_id_seq OWNED BY public.meteo.id;


--
-- TOC entry 198 (class 1259 OID 25147)
-- Name: nebulosite; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nebulosite (
    code character varying(5) NOT NULL,
    libelle_court character varying(50),
    libelle_long character varying(1000),
    id integer NOT NULL
);


ALTER TABLE public.nebulosite OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 25236)
-- Name: nebulosite_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nebulosite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nebulosite_id_seq OWNER TO postgres;

--
-- TOC entry 2866 (class 0 OID 0)
-- Dependencies: 208
-- Name: nebulosite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nebulosite_id_seq OWNED BY public.nebulosite.id;


--
-- TOC entry 201 (class 1259 OID 25168)
-- Name: pays; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pays (
    code character varying(20) NOT NULL,
    libelle character varying(200),
    id integer NOT NULL
);


ALTER TABLE public.pays OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 25229)
-- Name: pays_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pays_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pays_id_seq OWNER TO postgres;

--
-- TOC entry 2867 (class 0 OID 0)
-- Dependencies: 207
-- Name: pays_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pays_id_seq OWNED BY public.pays.id;


--
-- TOC entry 196 (class 1259 OID 25133)
-- Name: programme; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.programme (
    date date NOT NULL,
    date_insert_db date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.programme OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 25175)
-- Name: reunion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reunion (
    id integer NOT NULL,
    date_reunion date NOT NULL,
    date_insert_db date DEFAULT CURRENT_DATE NOT NULL,
    audience character varying(20),
    nature character varying(20),
    num_externe integer,
    num_officiel integer NOT NULL,
    offres_internet boolean,
    report_plus_fpa_max integer,
    statut character varying(20),
    programme_date date,
    hippodrome_code character varying(20),
    pays_code character varying(20),
    meteo_date_reunion date,
    meteo_num_officiel integer
);


ALTER TABLE public.reunion OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 25173)
-- Name: reunion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reunion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reunion_id_seq OWNER TO postgres;

--
-- TOC entry 2868 (class 0 OID 0)
-- Dependencies: 202
-- Name: reunion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reunion_id_seq OWNED BY public.reunion.id;


--
-- TOC entry 2714 (class 2604 OID 25207)
-- Name: course id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course ALTER COLUMN id SET DEFAULT nextval('public.course_id_seq'::regclass);


--
-- TOC entry 2708 (class 2604 OID 25221)
-- Name: hippodrome id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hippodrome ALTER COLUMN id SET DEFAULT nextval('public.hippodrome_id_seq'::regclass);


--
-- TOC entry 2710 (class 2604 OID 25160)
-- Name: meteo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meteo ALTER COLUMN id SET DEFAULT nextval('public.meteo_id_seq'::regclass);


--
-- TOC entry 2709 (class 2604 OID 25238)
-- Name: nebulosite id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nebulosite ALTER COLUMN id SET DEFAULT nextval('public.nebulosite_id_seq'::regclass);


--
-- TOC entry 2711 (class 2604 OID 25231)
-- Name: pays id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pays ALTER COLUMN id SET DEFAULT nextval('public.pays_id_seq'::regclass);


--
-- TOC entry 2712 (class 2604 OID 25178)
-- Name: reunion id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion ALTER COLUMN id SET DEFAULT nextval('public.reunion_id_seq'::regclass);


--
-- TOC entry 2728 (class 2606 OID 25212)
-- Name: course course_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (heure_depart, libelle);


--
-- TOC entry 2718 (class 2606 OID 25146)
-- Name: hippodrome hippodrome_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hippodrome
    ADD CONSTRAINT hippodrome_pkey PRIMARY KEY (code);


--
-- TOC entry 2722 (class 2606 OID 25162)
-- Name: meteo meteo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meteo
    ADD CONSTRAINT meteo_pkey PRIMARY KEY (date_reunion, num_reunion);


--
-- TOC entry 2720 (class 2606 OID 25154)
-- Name: nebulosite nebulosite_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nebulosite
    ADD CONSTRAINT nebulosite_pkey PRIMARY KEY (code);


--
-- TOC entry 2724 (class 2606 OID 25172)
-- Name: pays pays_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pays
    ADD CONSTRAINT pays_pkey PRIMARY KEY (code);


--
-- TOC entry 2716 (class 2606 OID 25138)
-- Name: programme programme_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.programme
    ADD CONSTRAINT programme_pkey PRIMARY KEY (date);


--
-- TOC entry 2726 (class 2606 OID 25181)
-- Name: reunion reunion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion
    ADD CONSTRAINT reunion_pkey PRIMARY KEY (date_reunion, num_officiel);


--
-- TOC entry 2734 (class 2606 OID 25213)
-- Name: course course_date_reunion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_date_reunion_fkey FOREIGN KEY (date_reunion, num_reunion) REFERENCES public.reunion(date_reunion, num_officiel) ON UPDATE CASCADE;


--
-- TOC entry 2729 (class 2606 OID 25163)
-- Name: meteo meteo_nebulosite_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meteo
    ADD CONSTRAINT meteo_nebulosite_code_fkey FOREIGN KEY (nebulosite_code) REFERENCES public.nebulosite(code) ON UPDATE CASCADE;


--
-- TOC entry 2731 (class 2606 OID 25187)
-- Name: reunion reunion_hippodrome_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion
    ADD CONSTRAINT reunion_hippodrome_code_fkey FOREIGN KEY (hippodrome_code) REFERENCES public.hippodrome(code) ON UPDATE CASCADE;


--
-- TOC entry 2733 (class 2606 OID 25197)
-- Name: reunion reunion_meteo_date_reunion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion
    ADD CONSTRAINT reunion_meteo_date_reunion_fkey FOREIGN KEY (meteo_date_reunion, meteo_num_officiel) REFERENCES public.meteo(date_reunion, num_reunion) ON UPDATE CASCADE;


--
-- TOC entry 2732 (class 2606 OID 25192)
-- Name: reunion reunion_pays_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion
    ADD CONSTRAINT reunion_pays_code_fkey FOREIGN KEY (pays_code) REFERENCES public.pays(code);


--
-- TOC entry 2730 (class 2606 OID 25182)
-- Name: reunion reunion_programme_date_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reunion
    ADD CONSTRAINT reunion_programme_date_fkey FOREIGN KEY (programme_date) REFERENCES public.programme(date) ON UPDATE CASCADE;


-- Completed on 2020-06-13 12:17:43

--
-- PostgreSQL database dump complete
--

