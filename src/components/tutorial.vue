<template>
  <div>
    <section
      class="page-title-area d-flex align-items-center bg_cover"
      style="background-image: url(assets/images/tutorial.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-item text-center">
              <h3 class="title">Tutorial</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    <a href="/tutorial">
                      Tutorial
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="page-title-shape">
        <img src="assets/images/banner-shape.png" alt="shape" />
      </div>
    </section>

    <section class="product-details-area pt-30 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-5">
            <div class="product-details-thumb mt-35">
              <img src="assets/images/3dzd.png" alt="product details" />
            </div>
            <div class="blog-thumb-list m-auto"></div>
          </div>
          <div class="col-lg-6 col-md-7">
            <div class="product-details-content mt-30">
              <div class="product-details-title">
                <h4 class="title">CPD3DS</h4>
              </div>
              <div class="product-details-review d-flex">
                <span> </span>
              </div>
              <div class="product-details-con">
                <p font-size:19px>
                  Difficulties increase as synthetic biology networks expand,
                  limiting the ability to design more complex systems.There are
                  challenges at every step of the way, from the characterization
                  of biological elements to the design and construction of
                  systems.The effective integration of current research results
                  of synthetic biology is a key step to promote its
                  development.We note that most of the current approaches to
                  protein design are de novo synthesis, requiring targeted
                  modifications or resets of amino acid sequences that require
                  corresponding modifications and resets of DNA.The workload of
                  this approach is undoubtedly huge. In addition, during the
                  first decade of synthetic biology, most of the research
                  focused on single-module design.Integrating different single
                  modules to perform more complex functions is another key. At
                  present, many excellent databases (CATH, SCOP/SCOP2, Uniprot)
                  have detailed and accurate records of the supersecondary
                  structure domain of proteins, and we realize that it may be
                  feasible to study proteins with more complex functions by
                  using domain as a module.At the same time, the research work
                  of domain will also play an important role in the development
                  of synthetic biology in the future. The structural domain
                  research can not only provide appropriate bricks for the
                  design of new proteins, but also Clues to the evolution of
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row">
      <div class="col-lg-12">
        <div class="wrapper-1">
          <div class="cols paddingFor">
            <el-collapse
              v-model="activeNames"
              @change="handleChange"
              style="width: 100%"
              align="middle"
            >
              <el-collapse-item title="Background" name="1">
                <div align="left">
                  <div>
                    In addition, during the first decade of synthetic biology,
                    most of the research focused on single-module
                    design.Integrating different single modules to perform more
                    complex functions is another key. At present, many excellent
                    databases (CATH, SCOP/SCOP2, Uniprot) have detailed and
                    accurate records of the supersecondary structure domain of
                    proteins,
                  </div>
                  <img src="/assets/images/scop.png" />
                  <img src="/assets/images/scope.png" />
                  <img src="/assets/images/cath.png" />
                  <img src="/assets/images/pdb.png" />
                  <img src="/assets/images/uniport.jpg" />
                  <div>
                    and we realize that it may be feasible to study proteins
                    with more complex functions by using domain as a module.At
                    the same time, the research work of domain will also play an
                    important role in the development of synthetic biology in
                    the future. The structural domain research can not only
                    provide appropriate bricks for the design of new proteins,
                    but also Clues to the evolution of life
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Project" name="2">
                <div align="left">
                  CPD3DS integrates CATH and
                  SCOP/SCOP2 , in order to provide as comprehensive and detailed
                  structure domain information as possible. At present, we have
                  achieved remarkable results in four aspects: design ideas
                   originality , data integrity, content accuracy and
                  user-friendliness
                  <br/><br/>
                  <h6>1. Model</h6>
                  <br/>
                  Initiated domain classificationaccording to the shape of
                  domain through 3Dzd & K-means
                  <br/><br/>
                  <h6>2.Rebuild our database</h6>
                  <br/>
                  Through Uniprot, CATH, SCOP/SCOP2 and PDB, we have integrated
                  domain division, related functions and probability combination
                  into our own project website, so as to form a complete system
                  of domain shape division, sequence, structure, function and
                  evolutionary relationship.
                  <br/><br/>
                  <h6>3. We use an authoritative database</h6>
                  <br/>
                  recognized by the synthetic biology community. Their strict
                  review system and supporting materials ensure the accuracy of
                  the content on our website.
                  <br/><br/>
                  <h6>4. We use We strive to make CPD3DS</h6>
                  <br/>
                  a more integrated and user-friendly database that provides
                  synthetic biologists with long-term, stable data updates and
                  search services. Currently, the team has developed very
                  practical functions on CPD3DS and plan to develop it further:
                  in the future, it will provide data support services for other
                  software teams. At present, We have two ways to design
                  group team ( USTC , Tongji) provides search and data support
                  services, the team received positive feedback.
                </div>
                <!-- <div>
                  页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
                </div> -->
              </el-collapse-item>
              <!-- <el-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>
                  清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
                </div>
                <div>
                  帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                </div>
              </el-collapse-item> -->
              <el-collapse-item title="Function" name="4">
                <div align="left">
                  <p>
                    For individual users, CPD3DS provides diversified
                    services. They can view related information about each type
                    of domain we classified based on shape: such as
                    sequence, 3D model, function, and combination. In addition,
                    it allows users to jump to the database of the data source
                    via a connection.
                  </p>
                  <br />
                  <p>
                    For the research team, CPD3DS provides data support
                    services. Users can download all data and all models in our
                    database. We also deployed a web application on our server.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Design" name="5">
                <div align="left">
                  <p>
                    In order to describe our domain module accurately and in
                    detail , our project integrates 5 databases, including
                    <a href="https://www.uniprot.org/">UniProt</a> ,
                    <a href="http://cathdb.info/">CATH</a> ,<a
                      href="http://scop.mrc-lmb.cam.ac.uk/"
                      >SCOP</a
                    >
                    /<a href="http://scop2.mrc-lmb.cam.ac.uk/">SCOP2</a> ,
                    <a href="https://www.rcsb.org/">PDB</a> . It can be said
                    that all the information contained in CPD3DS has been
                    verified by experiments, thus ensuring the high reliability
                    of the data.
                    <br />
                    <br />
                  </p>

                  <h4>1. Select the target database</h4>
                  <br />
                  The types that belong to the protein database are: 
                  UniProtKB , gene product annotation , PDB , CATH , SCOP/SCOP2.
                  <br />
                  <br />
                  <h5>UniProtKB</h5>
                  <br />
                  <a href="http://www.uniprot.org/">http://www.uniprot.org/</a>
                  <p>Its three-level database:</p>
                  <p>
                    1.UniPrac : A large number of protein sequences included in
                    all UniProt database sub-libraries.
                  </p>
                  <p>
                    2.       UniRef : Summarize several major databases
                    of UniProt and repeat the series after removal.
                  </p>
                  <p>
                    3.       UniProtKB: Databases with detailed annotations and
                    links to other databases are divided
                    into UniProtKB , Swiss-Prot , UniProtKB and TrEMBL . Among
                    them , the data in Swiss-Prot is obtained from the
                    experiment, and the annotation is completed after manual
                    inspection, and TrEMBL is the annotation completed
                    automatically.
                  </p>
                  <br />
                  <h5>PDB</h5>
                  <br />
                  <a href="http://www.rcsb.org/">http://www.rcsb.org/</a>
                  <p>
                    The search part displays the basic information about the
                    protein. If you want to see other information,
                    download a .pdb file in PDB format . The file can be opened
                    with Notepad. The file includes: molecular category,
                    keywords, method of determining structure, and primary
                    structure information , Amino acid sequence, modification of
                    standard residues, secondary structure, chemical bonds
                    between residues, 3D coordinates (atomic coordinates),
                    atomic bond information, etc. CATH http://cathdb.info/
                    Belongs to the secondary protein structure library.
                    SCOP/SCOP2 http://scop.mrc-lmb.cam.ac.uk/scop2/0.html
                    Belongs to the secondary protein structure database.
                    The classification of SCOP and S COP2 is based on four
                    levels: class (secondary structure component), family
                    (spatial geometric relationship), superfamily (distant
                    protein evolution relationship) and folding (close protein
                    evolution relationship). gene product annotation
                  </p>
                  <br />
                  <h5>CATH</h5>
                  <br />
                  <a href="http://cathdb.info/">http://cathdb.info/</a>
                  <p>Belongs to the secondary protein structure library.</p>
                  <br />
                  <h5>SCOP/SCOP2</h5>
                  <br />
                  <a href="http://scop.mrc-lmb.cam.ac.uk/scop2/0.html"
                    >http://scop.mrc-lmb.cam.ac.uk/scop2/0.html</a
                  >
                  <p>
                    Belongs to the secondary protein structure database.
                    The classification of SCOP and S COP2 is based on four
                    levels: class (secondary structure component), family
                    (spatial geometric relationship), superfamily (distant
                    protein evolution relationship) and folding (close protein
                    evolution relationship).gene product annotation
                  </p>
                  <br />
                  <h4>2. Data Integration</h4>
                  <br />
                  <p>
                    In order to enable users to scientifically utilize the
                    domain we have divided, we make full use of the current
                    mature database resources. Considering the scientific nature
                    of protein domain division, we refer to the domain labels of
                    CATH and SCOP. We crawled the functional annotations on Go
                    that are related to our domain classification so that you
                    can find the functions that domain might be involved in.In
                    addition, we also examined the binding score between
                    different shape classifications and gave the recommended
                    binding scheme, so as to avoid the situation that the
                    selected two types of proteins could not bind and wasted
                    financial and material resources.(filter)
                  </p>
                  <br />
                  <h4>3. De-redundancy</h4>
                  <br />
                  <p>
                    We downloaded all the PDB files on the PDB database and
                    de-redacted them by cd-hit [1,2,3,4,5,6]. The input file of
                    CD-HIT only has a FASTA format file. Generally speaking, THE
                    input file of CD-HIT is to cluster the gene or protein
                    sequences of several samples, so the sequences of these
                    samples need to be summarized together as the input file.
                    Cd-hit has two output files: one is a FASTA file that
                    contains only all sequences that represent sequences (i.e.,
                    sequences without redundancy);The other is a cluster
                    information file ending in.clSTR, in the following format.
                  </p>
                  <img src="/assets/images/fasta_format.png" width="70%" />
                  <br />
                  <p>
                    The one beginning with ">" is a clustering group. Each group
                    is arranged by sequence number. As shown in the figure
                    above, there are 5 cluster sequences in Cluster
                    1 group . Each cluster sequence has a percentage or "*" ,
                    the percentage represents the similarity between the
                    sequence and the representative sequence, and
                     "*" represents the sequence is the representative sequence
                    of the cluster.
                  </p>
                  <p>
                    Preliminary de-redundancy uses 80% similarity as the basic
                    parameter to perform de-redundancy operation,
                    and 33,455 de-redundant data are obtained .
                  </p>
                  <br />
                  <h5>4. Data Extraction</h5>
                  <br />
                  <p>
                    Since there was a lot of garbage in the PDB before
                    extraction, we did a preliminary extraction using a Python
                    script to get the Atom information and the HeTATm (residue -
                    equivalent to Atom) information that would be useful for the
                    project.The extracted file effect is as follows:
                  </p>
                  <br />
                  <img src="/assets/images/file_effect.png" height="50%" />
                  <br />
                  <br />
                  <h5>5. Feature extraction algorithm</h5>
                  <br />
                  <p>
                    The 3D-Zernike descriptor ( 3DZD ) can be used
                    to effectively compare the surface shapes of single chains,
                    single domains or single complexes in the latest protein
                    database ( PDB ) with all protein structures.
                  </p>
                  <p>
                    The 3D-Zernike descriptor ( 3DZD ) is a combination of
                    coefficients calculated from a set of well-defined
                    orthogonal 3D basic polynomials that approximate a
                    given 3D function (a grid of discrete surfaces). 3DZD has
                    various ideal characteristics when applied to protein
                    surface shape:
                  </p>
                  <p>
                    Rotation invariance: protein comparison does not require
                    prior structural comparison.
                  </p>
                  <p>
                    Tightness: The surface of a protein can be closely
                    represented as an eigenvector with only 121 Numbers (called
                    invariant). These vectors can be compared by calculating
                    euclide distances in a very short period of time, allowing
                    for rapid shape retrieval.
                  </p>
                  <p>
                    Layered resolution: The invariant of lower resolution is
                    also part of the higher resolution. For
                    example, the first 12 numbers in 121 invariants represent
                    the same protein at a lower resolution.
                  </p>
                  <p>
                    By calculating the Euclidean distance of 121 eigenvector of
                    two proteins, the similarity of the shapes of the two
                    proteins can be judged.
                  </p>
                  <br />
                  <h4>
                    5. Clustering
                  </h4>
                  <br />
                  <h5>Introduction to K-means clustering algorithm</h5>
                  <br />
                  <p>
                    Due to its excellent speed and good
                    scalability, K-means clustering algorithm can be regarded as
                    the most famous clustering method. K-means algorithm is a
                    process of repeatedly moving the center point of a class.
                    The center point of the class also known as centroids is
                    moved to the average position of its containing members, and
                    then its internal members are re-divided.
                  </p>
                  <p>
                    The K-means algorithm has many good characteristics that
                    make it widely used in many fields.
                  </p>
                  <p>
                    First, the algorithm can prune the tree to determine the
                    classification of some samples according to the categories
                    of fewer known clustering samples.
                  </p>
                  <p>
                    Secondly, in order to overcome the inaccuracy of clustering
                    of a small number of samples, the algorithm itself has an
                    optimization iteration function. On the obtained clusters,
                    iterative correction pruning is performed again to determine
                    the clustering of some samples, which optimizes the
                    unreasonable part of the initial supervised learning sample
                    classification.
                  </p>
                  <p>
                    Thirdly, the total clustering time complexity can be reduced
                    due to only small samples. Due to the advantages
                    of Kmeans itself, we think it is suitable for our project.
                  </p>
                  <br />
                  <b
                    >After the domain is classified according to the surface
                    shape, we consider that what users need may not only be our
                    shape classification, but the same domain sequence
                    information, chemical properties, and related functions are
                    also essential.
                  </b>
                  <br />
                  <br />
                  <h5>Sequence information</h5>
                  <br />
                  <p>
                    Our sequence information mainly comes
                    from PDB database, CATH database, SCOP and SCOP2 . Our domain division
                    is based on the structure domain information recorded
                    in the CATH database, SCOP and SCOP2 , and the original
                    files come from the PDB database.
                  </p>
                  <br />
                  <h5>Function information crawling</h5>
                  <br />
                  <p>
                    In order to associate the function of the protein with the
                    domain, we crawled the function tag corresponding to
                    GeneProduct Annotation in the protein Annotation page on the
                    PDB website.Then, the probability of the occurrence of
                    different function tags is counted in domain class as unit,
                    and the function tags with high probability are extracted.
                  </p>
                  <br />
                  <h5>Combined score recommendation</h5>
                  <br />
                  <p>
                    The combined probability statistics are performed for the
                    entries in the domain database after the redundancy is
                    removed.The aim is to guide the possibility of binding
                    domains of different classes during protein design.The
                    probability of each class combining with other class is
                    calculated.The above probability is normalized to obtain a
                    100*100 binding graph, where the darker the color is, the
                    more likely domain binding is in the corresponding class of
                    rows and columns.
                  </p>
                  <br />
                  <img src="/assets/images/combined.jpg" />
                  <br />
                  <br />
                  <p>
                    Similarly, we also put the combination probability of each
                    class with other class domains into the database, and users
                    can search the domain class name and get the domain class
                    name with high combination probability.
                  </p>
                  <br />
                  <h5>Domain model processing</h5>
                  <br />
                  <p>
                    We also designed a set of domain building block
                    modules similar to building blocks that can be assembled .
                  </p>
                  <br />
                  <img src="/assets/images/combined.png" />
                  <br />
                  <br />
                  <h4>Protein splitting</h4>
                  <br />
                  <p>
                    We consider that users may need to understand the structure
                    and composition of natural proteins in protein design, so
                    domains of natural proteins need to be found in our
                    library.Therefore, we have implemented representative domain
                    mapping for different domains, namely, similar domains in
                    natural proteins are replaced by representative domains to
                    ensure the integrity and simplicity of data.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Search" name="6">
                <div align="left">
                  <p>
                    In order to improve the user experience, CPD3DS provides a
                    centralized search method. Multiple IDs (such as PDB_ID ,
                    function name, CATH_ID , SCOP_ID , PDB name) and functions
                    of doamin, or other keywords can be searched for the
                    corresponding domain. In addition, CPD3DS also provides a
                    sequence matching tool (BLAST) , which the FASTA sequence
                    can be fed into and matched directly with domain in our
                    library .
                  </p>
                  <br />
                  <h5>Keyword search</h5>
                  <br />
                  <p>Keyword searcn method</p>
                  <br />
                  <h5>ID query</h5>
                  <br />
                  <p>
                    CPD3DS supports multiple database ID retrieval methods,
                    enabling users to obtain domain information in multiple
                    ways and view data from multiple angles.
                  </p>
                  <br />
                  <h5>Cloud database service</h5>
                  <br />
                  <p>
                    Our entire project adopts the strategy of local server and
                    cloud database storage. These files are stored in the Amazon
                    S3 cloud database service. The cloud database ensures the
                    safety of local projects and makes it easier to provide data
                    support services to other teams. We allow users to download
                    the domain data of the entire database and
                    provide files in FASTA format and PDB format. For the entire
                    database, we provide data download
                    in SQL , CSV and XML formats. Users can create the same
                    database through them. The user can also download a file
                    that he likes, and we provide a related download link in
                    each displayed record.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="About" name="7">
                <div align="left">
                  <p>
                    In order to make CPD3DS more user-friendly, we specially
                    designed a guide homepage and top navigation bar. Screen
                    adaptations are designed for different devices. On the
                    search results page, we designed side navigation and
                    filtering modeling for NCBI PubMed and UniProt . Make every
                    effort to create a smooth user experience. In addition, we
                    use Bootstrap Response Framework and other plug-ins on the
                    front end to design web responses to meet the needs of users
                    for mobile devices. Front-end VUE , back-end spring , php
                  </p>
                  <br />
                  <h4>The website design takes VUE as the basic framework</h4>
                  <br />
                  <a
                    >Vue (pronounced /vjuː/, like view) is a progressive
                    framework for building user interfaces. Unlike other
                    monolithic frameworks, Vue is designed from the ground up to
                    be incrementally adoptable. The core library is focused on
                    the view layer only, and is easy to pick up and integrate
                    with other libraries or existing projects. On the other
                    hand, Vue is also perfectly capable of powering
                    sophisticated Single-Page Applications when used in
                    combination with modern tooling and supporting libraries.</a
                  >
                  <h5>1. Small</h5>
                  <br />
                  <p>
                    The success of JavaScript framework depends on its size. The
                    smaller the size is, the more it will be used. One of the
                    greatest advantages of Vue.js is its small size. The size of
                    this framework is 18–21KB and it takes no time for the user
                    to download and use it.
                  </p>
                  <br />
                  <h5>2. Easy to Understand</h5>
                  <br />
                  <p>
                    One of the reasons for the popularity of this framework is
                    that it is quite easy to understand. The user can easily add
                    Vue.js to his web project because of its simple structure.
                    It has well defined architecture for keeping your data,
                    life-cycle methods and custom methods separate. It also has
                    some great features like watchers, computed properties and
                    directives which make process of building a modern web
                    application a breeze. Both the small as well as large scale
                    web applications can be developed through this framework
                    which saves a lot of time.
                  </p>
                  <br />
                  <h5>3. Simple Integration</h5>
                  <br />
                  <p>
                    Vue.js is also popular among the web developers because it
                    facilitates them to integrate with the existing
                    applications. This is because it is based on JavaScript
                    framework and can be integrated into other applications
                    built on JavaScript. You can go ahead and add Vue.js CDN and
                    start using it. Most of the third party vue components and
                    libraries are also available and supported with Vue.js CDN.
                    You don't necessarily need to setup node and npm to start
                    using Vue.js. This means that it is useful for developing
                    new web applications as well as altering the pre-existing
                    applications. You can also use it as a great jQuery
                    Replacement 😉.
                  </p>
                  <br />
                  <h5>4. Flexibility</h5>
                  <br />
                  <p>
                    A great deal of flexibility is another advantage of Vue.js.
                    It allows the user to write his template in HTML file,
                    JavaScript file, and pure JavaScript file using virtual
                    nodes. This flexibility also makes it easy to understand for
                    the developers of React.js, Angular.js, and any other new
                    JavaScript framework. When it comes to using the Vue.js.
                    It's also very easy to add and work with tools like
                    Templating Engines(e.g. pug), CSS Pre-processors(e.g. sass,
                    less, stylus etc.) and Type checking tools like Typescript.
                  </p>
                  <br />
                  <h5>5. Two-Way Communication</h5>
                  <br />
                  <p>
                    Vue.js facilitates two way communications because of its
                    MVVM architecture which makes it quite easy to handle HTML
                    blocks. It seems very close to Angular.js which also speeds
                    up HTML blocks. This feature is also termed as 2-Way Data
                    Binding, what that means is whatever changes you make in
                    your UI is passed to your data and changes done in your data
                    is reflected in your UI. Vue.js is also called Reactive
                    because it reacts to whenever your data in changed. This is
                    very different when compared to Libraries like React.js
                    which only supports one way communication.
                  </p>
                  <br />
                  <h5>6. Great Tooling</h5>
                  <br />
                  <p>
                    Vue.js has great tooling.The new Vue CLI i.e. 3.x is
                    arguably one of the best tool for a Javascript Framework. It
                    allows you to kickstart new Project with things like
                    Routing, State Store, Linting, Unit Testing, CSS
                    Pre-processors, Typescript, PWA etc built in. You can also
                    save your presents to use in other projects in the future.
                    It also allows you to add features down the road. Vue CLI
                    also provides a UI for managing your projects.
                  </p>
                  <br />
                  <h5>7. Best of both worlds</h5>
                  <br />
                  <p>
                    As you may have heard, Vue.js is inspired by Two already
                    great web frameworks i.e. React and Angular. It takes best
                    parts of both the frameworks. For example, just like React
                    it is component based and uses Virtual DOM which makes it
                    incredibly fast. And like Angular it has Directives and
                    2-Way Data Binding. It's not a library(unlike React.js) and
                    not a full fledge framework(unlike Angular). It has really
                    great balance of features that come out of the box and It's
                    incredibly easy to add more along the way like Routing and
                    State Management. We at Inkoop use this great framework in
                    our projects to build fast and interactive web applications
                    and We hope this article helps you learn more about Vue.js
                    and inspired you to build something with it.
                  </p>
                  <br />
                  <h4>The backend is designed with SpringCloud</h4>
                  <br />
                  <p>
                    Spring Cloud is an ordered collection of a series of
                    frameworks. It uses the development convenience of Spring
                    Boot to cleverly simplify the development of distributed
                    system infrastructure, such as service discovery
                    registration, configuration center , message bus, load
                    balancing, circuit breakers, data monitoring, etc., all can
                    be done in Spring Boot development style To one-click launch
                    and deployment. Spring Cloud does not repeatedly manufacture
                    wheels. It just combines the relatively mature and practical
                    service frameworks developed by various companies, and
                    repackages them through the Spring Boot style to shield out
                    the complex configuration and implementation principles, and
                    finally develop The authors set aside a set of distributed
                    system development kits that are easy to understand, easy to
                    deploy and easy to maintain.
                  </p>
                  <p>
                    At the same time, we adopted Swagger2 design interface
                    documentation package shelf, swagger2 is a standardized and
                    complete framework , with in generation, description, and
                    call visualization Restful style web service. I have
                    designed the interface description of each document to make
                    the interface, convenient front-end view, the use of the
                    test.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Reference" name="8">
                <div align="left">
                  <br />
                  <h5>CD-hit references</h5>
                  <br />
                  <p>
                    [1]Weizhong Li, Adam Godzik, Cd-hit: a fastprogram for
                    clustering and comparing large sets of protein or nucleotide
                    sequences, Bioinformatics, Volume 22, Issue 13, 1 July
                    2006, Pages1658–1659,
                    <a href="https://doi.org/10.1093/bioinformatics/btl158"
                      >https://doi.org/10.1093/bioinformatics/btl158</a
                    >
                  </p>
                  <p>
                    [2]Ying Huang, Beifang Niu, Ying Gao, LiminFu, Weizhong Li,
                    CD-HIT Suite: a web server for clustering and comparing
                    biologicalsequences, Bioinformatics, Volume 26, Issue 5, 1
                    March 2010, Pages68 0–682,
                    <a href="https://doi.org/10.1093/bioinformatics/btq003"
                      >https://doi.org/10.1093/bioinformatics/btq003</a
                    >
                  </p>
                  <p>
                    [3]Ying Huang, Beifang Niu, Ying Gao, Limin Fuand Weizhong
                    Li. CD-HIT Suite: a web server for clustering and comparing
                    biological sequences . Bioinformatics, 2010(26): 680-682.
                  </p>
                  <p>
                    [4]Weizhong Li and Adam Godzik. Cd-hit: a fastprogram for
                    clustering and comparing large sets of protein or nucleotide
                    sequences. Bioinformatics, 2006(22): 1658-1659.
                  </p>
                  <p>
                    [5]Weizhong Li, Lukasz Jaroszewski and
                    AdamGodzik. Tolerating some redundancy significantly speeds
                    up clustering of largeprotein databases. Bioinformatics,
                    2002(18): 77-82.
                  </p>
                  <p>
                    [6]Weizhong Li, Lukasz Jaroszewski and AdamGodzik.
                    Clustering of highly homologous sequences to reduce the size
                    of largeprotein datab ases. Bioinformatics, 2001(17):
                    282-283.
                  </p>
                  <br />
                  <h5>3DZD</h5>
                  <br />
                  <p>
                    [7]David La, Juan Esquivel-Rodriguez, Vishwesh Venkatraman,
                    Bin Li, Lee Sael, Steven Ueng, Steven Ahrendt, and Daisuke
                    Kihara. 3D-SURFER: software for high
                    throughput protein surface comparison and
                    analysis. B ioinformatics 25: 2843-2844 (2009)
                  </p>
                  <br />
                  <h5>Kmeans</h5>
                  <br />
                  <p>
                    [8] MacQueen, J. Some Methods for Classification and
                    Analysis of MultiVariate Observations[C]// Proc of Berkeley
                    Symposium on Mathematical Statistics & Probability. 1965.
                  </p>
                  <br />
                  <h5>model</h5>
                  <br />
                  <p>
                    [9]LSculpt.Download from
                    <a href="https://github.com/RomkoSI/lsculpt"
                      >https://github.com/RomkoSI/lsculpt</a
                    >.
                  </p>
                  <br />
                  <h5>Physical and chemical properties</h5>
                  <br />
                  <p>
                    [10]Stothard, Paul. "The sequence manipulation suite:
                    JavaScript programs for analyzing and formatting protein and
                    DNA sequences." BioTechniques 28 6 (2000): 1102, 1104.
                  </p>
                  <br />
                  <h5>Blast</h5>
                  <br />
                  <p>
                    [11]McGinnis, Scott, and Thomas L. Madden. "BLAST: at the
                    core of a powerful and diverse set of sequence analysis
                    tools." Nucleic acids research 32.suppl_2 (2004): W20- W25.
                  </p>
                  <br />
                  <h5>Database</h5>
                  <br />
                  <p>
                    [12]Sillitoe I, Dawson N, Lewis TE, et al.CATH: expanding
                    the horizons of structure-based functional annotations
                    forgenome sequences. Nucleic Acids Res.
                    2019;47(D1):D280-D284.doi:10.1093/nar/ gky1097
                  </p>
                  <p>
                    [13]Antonina Andreeva, Dave Howorth, Cyrus Chothia, Eugene
                    Kulesha, Alexey Murzin, SCOP2 prototype: a new approach to
                    protein structu re mining. (2014) Nucl. Acid Res., 42 (D1):
                    D310-D314
                  </p>
                  <p>
                    [14]Antonina Andreeva, Eugene Kulesha, Julian Gough, Alexey
                    Murzin, TheSCOP database in 2020: expanded classification of
                    representative family andsuperfamily domains of known
                    protein structures. (2020) Nucl. Acid Res., 48(D1):
                    D376-D382
                  </p>
                  <p>
                    [15] Goodsell DS. The Protein Data Bank[M]// Atomic
                    Evidence. Springer International Publishing, 2016.
                  </p>
                  <p>
                    [16]UniProt Consortium T UniProt: the universal protein
                    knowledgebase. Nucleic Acids Res. 2018;46:2699. doi:
                    10.1093/ nar/gky092.
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>

    <h1></h1>
    <!-- <h1>
      In the early days, we investigated a number of protein topics, but we did
      not find the ideal project. While feeling depressed, during a building
      block activity, Zhagnchang Yang accidentally installed parts of another
      building block model on our building block model by mistake.So we think
      about whether we can use different domains in nature to splice new
      proteins, just like we do with building blocks. After that, we
      brainstormed with PI and targeted the domain of the supersecondary
      structure of the protein.We looked through 5 years of iGEM software team
      projects and found that there were few domain-based researches. We
      realized that this aspect was a problem that we could solve.So we decided
      to build a shape-based domain taxonomy library, which aims to provide a
      series of shape-based domain modules and annotations that will inspire
      iGEMer to design proteins. At present, researches based on the shape of a
      large number of domains are still rare, most of which are based on the
      comparison and research of the shape between sequences or domains.However,
      this traditional method is very unfavorable for a large number of domains
      with the same shape to be screened and obtained. In the structural domain
      reorganization, domains with similar shape will be easier to be recombined
      to obtain proteins with specific functions.As a result, we have introduced
      CPD3DS, a new comprehensive component library based on the domain
      shape.Based on the shape of domain, it adopts feature extraction and
      clustering methods. Thousands of domains are divided into limited standard
      classes and 3D stereoscopic models are made for them.As a result, igemer
      splicing a new protein through domain model, providing inspiration for
      protein design.
    </h1>
    <h1>
      CPD3DS integrates PDB database,  Uniprot , CATH and SCOP/SCOP2 , in order
      to provide as comprehensive and detailed structure domain information as
      possible. At present, we have achieved remarkable results in four
      aspects: design ideas  originality , data integrity, content accuracy and
      user-friendliness 1.  Initiated domain classification according to the
      shape of domain through 3Dzd & K-means 2. Through Uniprot, CATH,
      SCOP/SCOP2 and PDB, we have integrated domain division, related functions
      and probability combination into our own project website, so as to form a
      complete system of domain shape division, sequence, structure, function
      and evolutionary relationship. 3. We use an authoritative database
      recognized by the synthetic biology community. Their strict review system
      and supporting materials ensure the accuracy of the content on our
      website. 4. We use We strive to make CPD3DS a more integrated and
      user-friendly database that provides synthetic biologists with long-term,
      stable data updates and search services. Currently, the team has developed
      very practical functions on CPD3DS and plan to develop it further: in
      the future, it will provide data support services for other software
      teams. At present, We have two ways to design group team ( USTC , Tongji)
      provides search and data support services, the team received positive
      feedback.
    </h1> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped></style>
